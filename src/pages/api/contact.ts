import type { APIRoute } from 'astro';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseConfig } from '../../config/firebase';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request body
    let data;
    try {
      data = await request.json();
    } catch (e) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Invalid JSON in request body'
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const { name, email, company, phone, telegram, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Missing required fields'
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
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

      console.log('New contact form submission:', {
        id: docRef.id,
        name,
        email,
        company,
        phone,
        telegram,
        message
      });

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Message sent successfully'
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    } catch (e) {
      console.error('Firebase storage error:', e);
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Failed to store message'
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Failed to process your request'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
