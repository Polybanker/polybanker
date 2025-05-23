import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  telegram: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    telegram: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { name, email, message } = formData;

      if (!name.trim() || !email.trim() || !message.trim()) {
        throw new Error('Please fill in all required fields');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        throw new Error('Please enter a valid email address');
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          name: name.trim(),
          email: email.trim(),
          company: formData.company.trim(),
          phone: formData.phone.trim(),
          telegram: formData.telegram.trim(),
          message: message.trim()
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setSubmitStatus({ type: 'success', message: data.message });
      setFormData({ name: '', email: '', company: '', phone: '', telegram: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Polybanker's team for decentralized banking services, crypto advisory, and institutional solutions. We're here to help you navigate the future of finance."
        keywords={[
          'contact polybanker',
          'crypto banking support',
          'decentralized banking contact',
          'blockchain finance help',
          'crypto advisory contact',
          'institutional crypto support'
        ]}
      />

      <div className="min-h-screen bg-dark text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
            <p className="text-lg text-gray-300 mb-12 text-center">
              Have questions about our decentralized banking services? We're here to help.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Email</h3>
                    <a
                      href="mailto:hello@polybanker.com"
                      className="text-blue-400 hover:text-blue-300"
                      aria-label="Email us at hello@polybanker.com"
                    >
                      hello@polybanker.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://twitter.com/polybanker"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                        aria-label="Follow Polybanker on Twitter"
                      >
                        X (Twitter)
                      </a>
                      <a
                        href="https://linkedin.com/company/polybanker"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                        aria-label="Follow Polybanker on LinkedIn"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                  {[
                    { id: 'name', label: 'Name *', type: 'text', required: true },
                    { id: 'email', label: 'Email *', type: 'email', required: true },
                    { id: 'company', label: 'Company', type: 'text' },
                    { id: 'phone', label: 'Phone', type: 'tel', pattern: '[0-9\\-\\+]{9,15}' },
                    { id: 'telegram', label: 'Telegram', type: 'text' }
                  ].map(({ id, label, type, required, pattern }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-sm font-medium mb-2">
                        {label}
                      </label>
                      <input
                        type={type}
                        id={id}
                        name={id}
                        value={formData[id as keyof FormData]}
                        onChange={handleChange}
                        required={required}
                        pattern={pattern}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {submitStatus && (
                    <div className={`text-sm ${submitStatus.type === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-medium text-white ${
                      isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
