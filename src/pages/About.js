import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// React is automatically imported by the JSX transform in React 17+
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
const values = [
    {
        title: 'Innovation',
        description: "Pushing the boundaries of what's possible in crypto finance.",
    },
    {
        title: 'Integrity',
        description: 'Building trust through transparency and the highest ethical practices.',
    },
    {
        title: 'Excellence',
        description: 'Delivering exceptional results through deep expertise.',
    },
    {
        title: 'Partnership',
        description: 'Working closely with clients to achieve their goals.',
    },
];
export default function About() {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "About Us - Polybanker" }), _jsx("meta", { name: "description", content: "Learn about Polybanker's mission to revolutionize crypto private banking and our team of experts." })] }), _jsx("section", { className: "pt-32 pb-20", children: _jsx("div", { className: "container", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "text-center", children: [_jsx("h1", { className: "heading-1 mb-6", children: "About Polybanker" }), _jsx("p", { className: "body-large text-gray-300 max-w-3xl mx-auto", children: "We're building the future of crypto private banking, combining traditional financial expertise with cutting-edge blockchain technology." })] }) }) }), _jsx("section", { className: "py-20 bg-dark-lighter", children: _jsx("div", { className: "container", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "max-w-3xl mx-auto text-center", children: [_jsx("h2", { className: "heading-2 mb-6", children: "Our Mission" }), _jsx("p", { className: "body text-gray-300", children: "To empower crypto founders and investors through strategic fundraising, capital growth, and premium financial services. We bridge the gap between traditional finance and the crypto ecosystem, making sophisticated financial solutions accessible to all." })] }) }) }), _jsx("section", { className: "py-20", children: _jsxs("div", { className: "container", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "text-center mb-16", children: [_jsx("h2", { className: "heading-2 mb-6", children: "Our Values" }), _jsx("p", { className: "body text-gray-300 max-w-3xl mx-auto", children: "These core principles guide everything we do at Polybanker." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: values.map((value, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, className: "p-6 rounded-lg bg-dark-lighter border border-white/10", children: [_jsx("h3", { className: "heading-4 mb-4", children: value.title }), _jsx("p", { className: "text-gray-300", children: value.description })] }, value.title))) })] }) }), _jsx("section", { className: "py-20 bg-dark-lighter", children: _jsx("div", { className: "container", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "max-w-3xl mx-auto text-center", children: [_jsx("h2", { className: "heading-2 mb-6", children: "Our Approach" }), _jsx("p", { className: "body text-gray-300 mb-8", children: "We combine deep crypto expertise with traditional financial wisdom to deliver exceptional results for our clients. Our approach is built on three pillars:" }), _jsxs("div", { className: "space-y-6 text-left", children: [_jsxs("div", { className: "p-6 rounded-lg bg-dark-lighter border border-white/10", children: [_jsx("h3", { className: "heading-4 mb-4", children: "1. Deep Understanding" }), _jsx("p", { className: "text-gray-300", children: "We take the time to understand your unique needs, goals, and challenges in the crypto space." })] }), _jsxs("div", { className: "p-6 rounded-lg bg-dark-lighter border border-white/10", children: [_jsx("h3", { className: "heading-4 mb-4", children: "2. Strategic Planning" }), _jsx("p", { className: "text-gray-300", children: "We develop customized strategies that align with your objectives and market conditions." })] }), _jsxs("div", { className: "p-6 rounded-lg bg-dark-lighter border border-white/10", children: [_jsx("h3", { className: "heading-4 mb-4", children: "3. Execution Excellence" }), _jsx("p", { className: "text-gray-300", children: "We execute with precision and care, ensuring the best possible outcomes for your project." })] })] })] }) }) })] }));
}
