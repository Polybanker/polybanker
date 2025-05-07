import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const navigation = {
    main: [
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },
    ],
    social: [
        {
            name: 'X (Twitter)',
            href: 'https://x.com/polybankers',
            icon: (props) => (_jsx("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: _jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) })),
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/polybanker/',
            icon: (props) => (_jsx("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: _jsx("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }) })),
        },
    ],
    legal: [
        { name: 'Terms of Service', href: '/legal/terms-of-service' },
        { name: 'Privacy Policy', href: '/legal/privacy' },
        { name: 'Risk Disclaimer', href: '/legal/risk-disclaimer' },
        { name: 'AML/KYC Policy', href: '/legal/aml-kyc' },
        { name: 'GDPR Policy', href: '/legal/gdpr' },
    ],
};
export default function Footer() {
    return (_jsxs("footer", { className: "bg-dark-lighter", "aria-labelledby": "footer-heading", children: [_jsx("h2", { id: "footer-heading", className: "sr-only", children: "Footer" }), _jsxs("div", { className: "container py-12 md:py-16", children: [_jsxs("div", { className: "xl:grid xl:grid-cols-3 xl:gap-8", children: [_jsxs("div", { className: "space-y-8", children: [_jsxs(Link, { to: "/", className: "flex items-center", children: [_jsx("img", { className: "h-8 w-auto", src: "/polybanker.png", alt: "Polybanker" }), _jsx("span", { className: "ml-2 text-xl font-bold text-white", children: "Polybanker" })] }), _jsx("p", { className: "text-sm leading-6 text-gray-300", children: "The First Truly Decentralized Crypto Banking Platform. Empowering crypto founders and investors through strategic fundraising, capital growth, and premium financial services." }), _jsx("div", { className: "flex space-x-6", children: navigation.social.map((item) => (_jsxs("a", { href: item.href, target: "_blank", rel: "noopener noreferrer", className: "text-gray-400 hover:text-primary-light", children: [_jsx("span", { className: "sr-only", children: item.name }), _jsx(item.icon, { className: "h-6 w-6", "aria-hidden": "true" })] }, item.name))) })] }), _jsxs("div", { className: "mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-sm font-semibold leading-6 text-white", children: "Navigation" }), _jsx("ul", { role: "list", className: "mt-6 space-y-4", children: navigation.main.map((item) => (_jsx("li", { children: _jsx(Link, { to: item.href, className: "text-sm leading-6 text-gray-300 hover:text-white", children: item.name }) }, item.name))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-sm font-semibold leading-6 text-white", children: "Legal" }), _jsx("ul", { role: "list", className: "mt-6 space-y-4", children: navigation.legal.map((item) => (_jsx("li", { children: _jsx(Link, { to: item.href, className: "text-sm leading-6 text-gray-300 hover:text-white", children: item.name }) }, item.name))) })] })] })] }), _jsx("div", { className: "mt-12 border-t border-white/10 pt-8", children: _jsxs("p", { className: "text-xs leading-5 text-gray-400", children: ["\u00A9 ", new Date().getFullYear(), " Polybanker. All rights reserved. | Contact: ", _jsx("a", { href: "mailto:hello@polybanker.com", className: "hover:text-white", children: "hello@polybanker.com" })] }) })] })] }));
}
