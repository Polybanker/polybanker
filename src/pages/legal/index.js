import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const legalDocuments = [
    {
        title: "Terms of Service",
        description: "The terms and conditions governing your use of Polybanker's services.",
        path: "/legal/terms-of-service",
        icon: "📜",
    },
    {
        title: "Privacy Policy",
        description: "How we collect, use, and protect your personal information.",
        path: "/legal/privacy",
        icon: "🔒",
    },
    {
        title: "Risk Disclaimer",
        description: "Important information about the risks associated with cryptocurrency investments.",
        path: "/legal/risk-disclaimer",
        icon: "⚠️",
    },
    {
        title: "AML/KYC Policy",
        description: "Our anti-money laundering and know-your-customer procedures.",
        path: "/legal/aml-kyc",
        icon: "🛡️",
    },
    {
        title: "GDPR Policy",
        description: "How we comply with the General Data Protection Regulation and protect your data rights.",
        path: "/legal/gdpr",
        icon: "📋",
    },
];
export default function LegalIndex() {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Legal Documents - Polybanker" }), _jsx("meta", { name: "description", content: "Access Polybanker's legal documents, including Terms of Service, Privacy Policy, Risk Disclaimer, AML/KYC Policy, and GDPR Policy." })] }), _jsx("section", { className: "pt-32 pb-20", children: _jsx("div", { className: "container", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "max-w-4xl mx-auto", children: [_jsx("h1", { className: "heading-1 mb-6", children: "Legal Documents" }), _jsx("p", { className: "body-large text-gray-300 mb-12", children: "Important legal information and policies governing your use of Polybanker's services." }), _jsx("div", { className: "grid gap-6 md:grid-cols-2", children: legalDocuments.map((doc, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, children: _jsx(Link, { to: doc.path, className: "block p-6 rounded-lg bg-dark-lighter border border-white/10 hover:border-primary/50 transition-colors", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("span", { className: "text-3xl", children: doc.icon }), _jsxs("div", { children: [_jsx("h2", { className: "heading-3 mb-2", children: doc.title }), _jsx("p", { className: "text-gray-300", children: doc.description })] })] }) }) }, doc.title))) }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "mt-12 p-6 rounded-lg bg-dark-lighter border border-white/10", children: [_jsx("h2", { className: "heading-3 mb-4", children: "Contact Our Legal Team" }), _jsx("p", { className: "text-gray-300 mb-4", children: "If you have any questions about our legal documents or policies, please contact our legal team." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [_jsx("a", { href: "mailto:hello@polybanker.com", className: "btn btn-primary", children: "Email Legal Team" }), _jsx(Link, { to: "/contact", className: "btn btn-outline", children: "Contact Support" })] })] })] }) }) })] }));
}
