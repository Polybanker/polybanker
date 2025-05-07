import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        telegram: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
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
        }
        catch (error) {
            setSubmitStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'Failed to send message'
            });
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Contact Us", description: "Get in touch with Polybanker's team for decentralized banking services, crypto advisory, and institutional solutions. We're here to help you navigate the future of finance.", keywords: [
                    'contact polybanker',
                    'crypto banking support',
                    'decentralized banking contact',
                    'blockchain finance help',
                    'crypto advisory contact',
                    'institutional crypto support'
                ] }), _jsx("div", { className: "min-h-screen bg-dark text-white py-20", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "max-w-4xl mx-auto", children: [_jsx("h1", { className: "text-4xl font-bold mb-8 text-center", children: "Contact Us" }), _jsx("p", { className: "text-lg text-gray-300 mb-12 text-center", children: "Have questions about our decentralized banking services? We're here to help." }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-semibold mb-6", children: "Get in Touch" }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium mb-2", children: "Email" }), _jsx("a", { href: "mailto:hello@polybanker.com", className: "text-blue-400 hover:text-blue-300", "aria-label": "Email us at hello@polybanker.com", children: "hello@polybanker.com" })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium mb-2", children: "Follow Us" }), _jsxs("div", { className: "flex space-x-4", children: [_jsx("a", { href: "https://twitter.com/polybanker", target: "_blank", rel: "noopener noreferrer", className: "text-blue-400 hover:text-blue-300", "aria-label": "Follow Polybanker on Twitter", children: "X (Twitter)" }), _jsx("a", { href: "https://linkedin.com/company/polybanker", target: "_blank", rel: "noopener noreferrer", className: "text-blue-400 hover:text-blue-300", "aria-label": "Follow Polybanker on LinkedIn", children: "LinkedIn" })] })] })] })] }), _jsx("div", { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", "aria-label": "Contact form", children: [[
                                                    { id: 'name', label: 'Name *', type: 'text', required: true },
                                                    { id: 'email', label: 'Email *', type: 'email', required: true },
                                                    { id: 'company', label: 'Company', type: 'text' },
                                                    { id: 'phone', label: 'Phone', type: 'tel', pattern: '[0-9\\-\\+]{9,15}' },
                                                    { id: 'telegram', label: 'Telegram', type: 'text' }
                                                ].map(({ id, label, type, required, pattern }) => (_jsxs("div", { children: [_jsx("label", { htmlFor: id, className: "block text-sm font-medium mb-2", children: label }), _jsx("input", { type: type, id: id, name: id, value: formData[id], onChange: handleChange, required: required, pattern: pattern, className: "w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" })] }, id))), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-sm font-medium mb-2", children: "Message *" }), _jsx("textarea", { id: "message", name: "message", value: formData.message, onChange: handleChange, required: true, rows: 4, className: "w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" })] }), submitStatus && (_jsx("div", { className: `text-sm ${submitStatus.type === 'error' ? 'text-red-500' : 'text-green-500'}`, children: submitStatus.message })), _jsx("button", { type: "submit", disabled: isSubmitting, className: `w-full py-3 px-6 rounded-lg font-medium text-white ${isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`, children: isSubmitting ? 'Sending...' : 'Send Message' })] }) })] })] }) }) })] }));
}
