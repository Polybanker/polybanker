import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// React is automatically imported by the JSX transform in React 17+
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export default function NotFound() {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Page Not Found - Polybanker" }), _jsx("meta", { name: "description", content: "The page you're looking for doesn't exist." })] }), _jsx("section", { className: "min-h-screen flex items-center justify-center py-20", children: _jsx("div", { className: "container", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "text-center", children: [_jsx("h1", { className: "heading-1 mb-6", children: "404" }), _jsx("h2", { className: "heading-2 mb-6", children: "Page Not Found" }), _jsx("p", { className: "body-large text-gray-300 max-w-2xl mx-auto mb-10", children: "The page you're looking for doesn't exist or has been moved. Let's get you back on track." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsx(Link, { to: "/", className: "btn-primary", children: "Go Home" }), _jsx(Link, { to: "/contact", className: "btn-secondary", children: "Contact Support" })] })] }) }) })] }));
}
