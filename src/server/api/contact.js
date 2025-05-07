import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { collection, addDoc } from 'firebase/firestore';
import sgMail from '@sendgrid/mail';
import { db } from '../../config/firebase';
// Initialize SendGrid
const sendgridApiKey = process.env.VITE_SENDGRID_API_KEY || '';
sgMail.setApiKey(sendgridApiKey);
// Create Hono app
const api = new Hono();
// Add CORS middleware
api.use('/*', cors());
// Contact form endpoint
api.post('/contact', async (c) => {
    try {
        // Get form data
        const { name, email, company, phone, telegram, message } = await c.req.json();
        // Validate required fields
        if (!name?.trim() || !email?.trim() || !message?.trim()) {
            return c.json({
                success: false,
                message: 'Name, email, and message are required'
            }, 400);
        }
        // Store in Firebase
        await addDoc(collection(db, 'contact_submissions'), {
            name: name.trim(),
            email: email.trim(),
            company: company?.trim() || '',
            phone: phone?.trim() || '',
            telegram: telegram?.trim() || '',
            message: message.trim(),
            timestamp: new Date().toISOString()
        });
        // Send email notification
        const msg = {
            to: process.env.VITE_CONTACT_EMAIL || '',
            from: process.env.VITE_SENDGRID_FROM_EMAIL || '',
            subject: 'New Contact Form Submission',
            text: `
        New contact form submission from ${name.trim()}
        
        Email: ${email.trim()}
        Company: ${company?.trim() || 'N/A'}
        Phone: ${phone?.trim() || 'N/A'}
        Telegram: ${telegram?.trim() || 'N/A'}
        
        Message:
        ${message.trim()}
      `,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Company:</strong> ${company?.trim() || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone?.trim() || 'N/A'}</p>
        <p><strong>Telegram:</strong> ${telegram?.trim() || 'N/A'}</p>
        <h3>Message:</h3>
        <p>${message.trim()}</p>
      `
        };
        await sgMail.send(msg);
        return c.json({
            success: true,
            message: 'Thank you for your message. We will get back to you soon!'
        });
    }
    catch (error) {
        console.error('Error processing contact form:', error);
        return c.json({
            success: false,
            message: 'Failed to process your message. Please try again later.'
        }, 500);
    }
});
export default api;
