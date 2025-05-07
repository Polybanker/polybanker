import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
];
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (_jsxs("header", { className: "fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-white/10", children: [_jsx("nav", { className: "container mx-auto px-4 sm:px-6 lg:px-8", "aria-label": "Global", children: _jsxs("div", { className: "flex h-20 items-center justify-between", children: [_jsx("div", { className: "flex items-center", children: _jsxs(Link, { to: "/", className: "flex items-center", children: [_jsx("img", { className: "h-8 w-auto", src: "/polybanker.png", alt: "Polybanker" }), _jsx("span", { className: "ml-2 text-xl font-bold text-white", children: "Polybanker" })] }) }), _jsxs("div", { className: "hidden md:flex md:items-center md:space-x-8", children: [navigation.map((item) => (_jsx(Link, { to: item.href, className: "text-sm font-medium text-gray-300 hover:text-white transition-colors", children: item.name }, item.name))), _jsx(Link, { to: "/contact", className: "btn btn-primary", children: "Get Started" })] }), _jsx("div", { className: "flex md:hidden", children: _jsxs("button", { type: "button", className: "text-gray-400 hover:text-white", onClick: () => setIsOpen(!isOpen), children: [_jsx("span", { className: "sr-only", children: "Open main menu" }), !isOpen ? (_jsx("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" }) })) : (_jsx("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) }))] }) })] }) }), _jsx(motion.div, { initial: false, animate: isOpen ? "open" : "closed", variants: {
                    open: { opacity: 1, height: "auto" },
                    closed: { opacity: 0, height: 0 }
                }, className: "md:hidden", children: _jsxs("div", { className: "container mx-auto px-4 py-4 space-y-4", children: [navigation.map((item) => (_jsx(Link, { to: item.href, className: "block text-base font-medium text-gray-300 hover:text-white transition-colors", onClick: () => setIsOpen(false), children: item.name }, item.name))), _jsx(Link, { to: "/contact", className: "block btn btn-primary w-full text-center", onClick: () => setIsOpen(false), children: "Get Started" })] }) })] }));
}
