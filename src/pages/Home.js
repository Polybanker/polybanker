import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// React is automatically imported by the JSX transform in React 17+
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const coreFeatures = [
    {
        title: 'On-Chain Lending',
        description: 'Reputation-based lending with low/no collateral requirements.',
        href: '/services#lending',
    },
    {
        title: 'DeFi Banking',
        description: 'Interest-bearing accounts with fiat onramp/offramp solutions.',
        href: '/services#banking',
    },
    {
        title: 'Cross-Border Payments',
        description: 'Low-fee remittances and instant payroll processing.',
        href: '/services#payments',
    },
    {
        title: 'USDP Stablecoin',
        description: 'USD-pegged digital dollar for global payments and DeFi.',
        href: '/services#stablecoin',
    },
];
const advisoryServices = [
    {
        title: 'Deal-Making',
        description: 'Strategic capital matchmaking for crypto projects.',
        href: '/services#deal-making',
    },
    {
        title: 'Treasury Management',
        description: 'Professional treasury solutions for DAOs and projects.',
        href: '/services#treasury',
    },
    {
        title: 'Fund Setup',
        description: 'End-to-end support for crypto investment vehicles.',
        href: '/services#fund-setup',
    },
    {
        title: 'Private Banking',
        description: 'Exclusive services for UHNWIs in crypto.',
        href: '/services#private-banking',
    },
];
const testimonials = [
    {
        content: "Polybanker has been instrumental in our fundraising journey. Their expertise in crypto capital markets is unmatched.",
        author: "Sarah Chen",
        role: "CEO, Web3 Startup",
    },
    {
        content: "The team's deep understanding of both traditional finance and crypto has been invaluable for our DAO's treasury management.",
        author: "Michael Rodriguez",
        role: "Treasury Lead, DeFi Protocol",
    },
    {
        content: "Working with Polybanker has transformed our approach to crypto investments. Their strategic guidance is exceptional.",
        author: "David Kim",
        role: "Family Office Director",
    },
];
export default function Home() {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Polybanker - The First Truly Decentralized Crypto Banking Platform" }), _jsx("meta", { name: "description", content: "Polybanker bridges traditional finance and crypto, offering comprehensive banking services, advisory solutions, and institutional-grade DeFi products for the Web3 era." })] }), _jsx("section", { className: "relative pt-32 pb-20 overflow-hidden", children: _jsx("div", { className: "container", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "text-center", children: [_jsxs("h1", { className: "heading-1 mb-6", children: ["The First Truly Decentralized", _jsx("br", {}), _jsx("span", { className: "text-primary", children: "Crypto Banking Platform" })] }), _jsx("p", { className: "body-large text-gray-300 max-w-3xl mx-auto mb-10", children: "Experience the future of banking with our comprehensive suite of crypto-native services, from reputation-based lending to institutional-grade DeFi solutions." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Link, { to: "/contact", className: "btn-primary", children: "Get Started" }), _jsx(Link, { to: "/services", className: "btn-secondary", children: "Explore Services" })] })] }) }) }), _jsx("section", { className: "py-20 bg-dark-lighter", children: _jsxs("div", { className: "container", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "text-center mb-16", children: [_jsx("h2", { className: "heading-2 mb-6", children: "Why Choose Polybanker?" }), _jsx("p", { className: "body text-gray-300 max-w-3xl mx-auto", children: "We combine deep crypto expertise with traditional financial wisdom to deliver exceptional results for our clients." })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
                                {
                                    title: "Crypto-Native Expertise",
                                    description: "Deep understanding of blockchain technology and DeFi protocols.",
                                },
                                {
                                    title: "Institutional Grade",
                                    description: "Compliance-first design with robust security measures.",
                                },
                                {
                                    title: "Global Network",
                                    description: "Access to a vast network of investors and industry leaders.",
                                },
                            ].map((feature, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, className: "p-6 rounded-lg bg-dark border border-white/10", children: [_jsx("h3", { className: "heading-4 mb-4", children: feature.title }), _jsx("p", { className: "text-gray-300", children: feature.description })] }, feature.title))) })] }) }), _jsx("section", { className: "py-20", children: _jsxs("div", { className: "container", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "text-center mb-16", children: [_jsx("h2", { className: "heading-2 mb-6", children: "Core Banking Features" }), _jsx("p", { className: "body text-gray-300 max-w-3xl mx-auto", children: "Comprehensive crypto-native banking solutions designed for the future of finance." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: coreFeatures.map((feature, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, className: "p-6 rounded-lg bg-dark-lighter border border-white/10 hover:border-primary/50 transition-colors", children: [_jsx("h3", { className: "heading-4 mb-4", children: feature.title }), _jsx("p", { className: "text-gray-300 mb-6", children: feature.description }), _jsx(Link, { to: feature.href, className: "text-primary hover:text-primary-light", children: "Learn More \u2192" })] }, feature.title))) })] }) }), _jsx("section", { className: "py-20 bg-dark-lighter", children: _jsxs("div", { className: "container", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "text-center mb-16", children: [_jsx("h2", { className: "heading-2 mb-6", children: "Advisory & Execution Services" }), _jsx("p", { className: "body text-gray-300 max-w-3xl mx-auto", children: "Expert guidance and execution support for your crypto journey." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: advisoryServices.map((service, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, className: "p-6 rounded-lg bg-dark border border-white/10 hover:border-primary/50 transition-colors", children: [_jsx("h3", { className: "heading-4 mb-4", children: service.title }), _jsx("p", { className: "text-gray-300 mb-6", children: service.description }), _jsx(Link, { to: service.href, className: "text-primary hover:text-primary-light", children: "Learn More \u2192" })] }, service.title))) })] }) }), _jsx("section", { className: "py-20", children: _jsxs("div", { className: "container", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "text-center mb-16", children: [_jsx("h2", { className: "heading-2 mb-6", children: "What Our Clients Say" }), _jsx("p", { className: "body text-gray-300 max-w-3xl mx-auto", children: "Trusted by leading crypto projects and investors worldwide." })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, className: "p-6 rounded-lg bg-dark-lighter border border-white/10", children: [_jsxs("p", { className: "text-gray-300 mb-6", children: ["\"", testimonial.content, "\""] }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold", children: testimonial.author }), _jsx("p", { className: "text-sm text-gray-400", children: testimonial.role })] })] }, testimonial.author))) })] }) }), _jsx("section", { className: "py-20 bg-dark-lighter", children: _jsx("div", { className: "container", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "text-center", children: [_jsx("h2", { className: "heading-2 mb-6", children: "Ready to Transform Your Crypto Journey?" }), _jsx("p", { className: "body text-gray-300 max-w-3xl mx-auto mb-10", children: "Join the growing list of successful projects and investors who trust Polybanker for their financial needs." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Link, { to: "/contact?type=startup", className: "btn-primary", children: "Apply as a Startup" }), _jsx(Link, { to: "/contact?type=investor", className: "btn-secondary", children: "Join as an Investor" })] })] }) }) })] }));
}
