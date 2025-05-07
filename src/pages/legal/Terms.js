import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
const sections = [
    {
        title: "1. Introduction",
        content: `Welcome to Polybanker. By accessing our services, you agree to these Terms and Conditions. These terms govern your use of our platform and services.`,
    },
    {
        title: "2. Definitions",
        content: `"Platform" refers to Polybanker's website and services. "User," "you," and "your" refer to individuals or entities using our services. "We," "us," and "our" refer to Polybanker.`,
    },
    {
        title: "3. Services",
        content: `Polybanker provides crypto-native private banking and strategic advisory services, including but not limited to fundraising, deal-making, treasury management, and financial advisory services.`,
    },
    {
        title: "4. User Obligations",
        content: `Users must provide accurate information, maintain confidentiality of their accounts, and comply with all applicable laws and regulations. Users are responsible for all activities under their accounts.`,
    },
    {
        title: "5. Intellectual Property",
        content: `All content, trademarks, and intellectual property on the Platform are owned by Polybanker. Users may not use, reproduce, or distribute our intellectual property without permission.`,
    },
    {
        title: "6. Limitation of Liability",
        content: `Polybanker is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the amount paid for our services.`,
    },
    {
        title: "7. Termination",
        content: `We reserve the right to terminate or suspend access to our services for violations of these terms or for any other reason at our sole discretion.`,
    },
    {
        title: "8. Changes to Terms",
        content: `We may modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.`,
    },
    {
        title: "9. Governing Law",
        content: `These terms are governed by the laws of the jurisdiction in which Polybanker operates. Any disputes shall be resolved in the courts of that jurisdiction.`,
    },
    {
        title: "10. Contact Information",
        content: `For questions about these terms, please contact us at legal@polybanker.com.`,
    },
];
export default function Terms() {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Terms & Conditions - Polybanker" }), _jsx("meta", { name: "description", content: "Terms and conditions for using Polybanker's crypto-native private banking and strategic advisory services." })] }), _jsx("section", { className: "pt-32 pb-20", children: _jsx("div", { className: "container", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "max-w-4xl mx-auto", children: [_jsx("h1", { className: "heading-1 mb-6", children: "Terms & Conditions" }), _jsxs("p", { className: "body-large text-gray-300 mb-12", children: ["Last updated: ", new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })] }), _jsx("div", { className: "space-y-12", children: sections.map((section, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, children: [_jsx("h2", { className: "heading-3 mb-4", children: section.title }), _jsx("p", { className: "text-gray-300", children: section.content })] }, section.title))) }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "mt-12 p-6 rounded-lg bg-dark-lighter border border-white/10", children: [_jsx("h2", { className: "heading-3 mb-4", children: "Important Notice" }), _jsx("p", { className: "text-gray-300", children: "These terms and conditions constitute a legally binding agreement between you and Polybanker. By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms." })] })] }) }) })] }));
}
