import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseConfig } from './src/config/firebase';
import type { IncomingMessage, ServerResponse } from 'http';

// Define types for recaptcha response
interface RecaptchaVerificationResult {
  success: boolean;
  'error-codes'?: string[];
}

// Define types for contact form data
interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  telegram?: string;
  message: string;
  recaptchaToken: string;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Create Hono app
const apiHono = new Hono();

// Add CORS middleware
apiHono.use('/*', cors());

// Contact form endpoint
apiHono.post('/contact', async (c) => {
  try {
    const data = await c.req.json() as ContactFormData;
    const { name, email, company, phone, telegram, message, recaptchaToken } = data;

    // Validate required fields
    if (!name || !email || !message || !recaptchaToken) {
      return c.json({
        success: false,
        message: 'Missing required fields'
      }, 400);
    }

    // Verify reCAPTCHA token
    try {
      const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: import.meta.env.VITE_RECAPTCHA_SECRET_KEY as string || '',
          response: recaptchaToken,
          remoteip: c.req.header('x-forwarded-for') || c.req.header('x-real-ip') || '127.0.0.1'
        }).toString()
      });

      const recaptchaResult = await recaptchaResponse.json() as RecaptchaVerificationResult;
      
      console.log('reCAPTCHA verification result:', {
        success: recaptchaResult.success,
        errors: recaptchaResult['error-codes']
      });

      if (!recaptchaResult.success) {
        return c.json({
          success: false,
          message: 'reCAPTCHA verification failed. Please try again.'
        }, 400);
      }
    } catch (e) {
      console.error('reCAPTCHA verification error:', e);
      return c.json({
        success: false,
        message: 'Failed to verify reCAPTCHA'
      }, 500);
    }

    // Store in Firebase
    try {
      const docRef = await addDoc(collection(db, 'contacts'), {
        name,
        email,
        company: company || '',
        phone: phone || '',
        telegram: telegram || '',
        message,
        timestamp: new Date().toISOString()
      });

      // Log successful submission
      console.log('New contact form submission:', {
        id: docRef.id,
        name,
        email,
        company,
        phone,
        telegram,
        message
      });

      return c.json({
        success: true,
        message: 'Message sent successfully'
      });
    } catch (e) {
      console.error('Firebase storage error:', e);
      return c.json({
        success: false,
        message: 'Failed to store message'
      }, 500);
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return c.json({
      success: false,
      message: 'Failed to process your request'
    }, 500);
  }
});

export default defineConfig({
  plugins: [
    react(),
    cloudflare(),
    {
      name: 'api',
      configureServer(server) {
        server.middlewares.use('/api', async (req: IncomingMessage, res: ServerResponse) => {
          try {
            const request = new Request(`http://localhost${req.url}`, {
              method: req.method,
              headers: req.headers as Record<string, string>,
              body: req.method !== 'GET' && req.method !== 'HEAD' ? req.body : undefined
            });

            const response = await apiHono.fetch(request);
            const data = await response.json();
            res.statusCode = response.status;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
          } catch (error) {
            console.error('API error:', error);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
          }
        });
      }
    }
  ],
  define: {
    // Environment variables are already defined in env.d.ts
  },
});
