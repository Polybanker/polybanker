import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const caseStudies = [
    {
        id: 1,
        title: "DeFi Protocol Fundraising",
        category: "Deal-Making",
        description: "Successfully raised $50M Series A for a leading DeFi protocol, connecting them with strategic investors.",
        metrics: [
            { label: "Amount Raised", value: "$50M" },
            { label: "Time to Close", value: "45 days" },
            { label: "Investor Network", value: "25+" },
        ],
        image: "/portfolio/defi-fundraising.jpg",
    },
    {
        id: 2,
        title: "DAO Treasury Optimization",
        category: "Treasury",
        description: "Implemented comprehensive treasury management strategy for a major DAO, increasing yield by 300%.",
        metrics: [
            { label: "Yield Increase", value: "300%" },
            { label: "Risk Reduction", value: "40%" },
            { label: "Assets Under Management", value: "$100M+" },
        ],
        image: "/portfolio/dao-treasury.jpg",
    },
    {
        id: 3,
        title: "Crypto Investment Fund",
        category: "Fund Setup",
        description: "Established a $200M crypto investment fund with institutional-grade infrastructure and compliance.",
        metrics: [
            { label: "Fund Size", value: "$200M" },
            { label: "Investor Types", value: "15+" },
            { label: "Jurisdictions", value: "5" },
        ],
        image: "/portfolio/crypto-fund.jpg",
    },
    {
        id: 4,
        title: "Web3 Startup Advisory",
        category: "Advisory",
        description: "Provided strategic guidance for a Web3 startup's market entry and growth strategy.",
        metrics: [
            { label: "Market Share", value: "25%" },
            { label: "Growth Rate", value: "200%" },
            { label: "Partnerships", value: "10+" },
        ],
        image: "/portfolio/web3-advisory.jpg",
    },
];
const categories = [
    'All',
    'Deal-Making',
    'Treasury',
    'Fund Setup',
    'Advisory',
];
export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const filteredCaseStudies = selectedCategory === 'All'
        ? caseStudies
        : caseStudies.filter(study => study.category === selectedCategory);
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Portfolio - Polybanker" }), _jsx("meta", { name: "description", content: "Explore Polybanker's success stories and case studies in crypto finance, from fundraising to treasury management." })] }), _jsx("section", { className: "pt-32 pb-20", children: _jsx("div", { className: "container", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "text-center", children: [_jsx("h1", { className: "heading-1 mb-6", children: "Our Portfolio" }), _jsx("p", { className: "body-large text-gray-300 max-w-3xl mx-auto", children: "Discover how we've helped crypto projects and investors achieve their goals through strategic financial solutions." })] }) }) }), _jsx("section", { className: "py-10", children: _jsx("div", { className: "container", children: _jsx("div", { className: "flex flex-wrap justify-center gap-4", children: categories.map(category => (_jsx("button", { onClick: () => setSelectedCategory(category), className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                                ? 'bg-primary text-white'
                                : 'bg-dark-lighter text-gray-300 hover:bg-dark'}`, children: category }, category))) }) }) }), _jsx("section", { className: "py-20", children: _jsx("div", { className: "container", children: _jsx("div", { className: "grid md:grid-cols-2 gap-8", children: filteredCaseStudies.map((study, index) => (_jsx(motion.article, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, className: "group", children: _jsxs(Link, { to: `/portfolio/${study.id}`, className: "block", children: [_jsxs("div", { className: "relative aspect-[16/9] mb-6 rounded-lg overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-dark-lighter" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }), _jsx("div", { className: "absolute bottom-4 left-4", children: _jsx("span", { className: "inline-block px-3 py-1 text-sm font-medium text-white bg-primary/20 rounded-full", children: study.category }) })] }), _jsx("h2", { className: "heading-3 mb-4 group-hover:text-primary transition-colors", children: study.title }), _jsx("p", { className: "text-gray-300 mb-6", children: study.description }), _jsx("div", { className: "grid grid-cols-3 gap-4", children: study.metrics.map(metric => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-2xl font-bold text-primary mb-1", children: metric.value }), _jsx("div", { className: "text-sm text-gray-400", children: metric.label })] }, metric.label))) })] }) }, study.id))) }) }) }), _jsx("section", { className: "py-20 bg-dark-lighter", children: _jsxs("div", { className: "container", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "text-center mb-16", children: [_jsx("h2", { className: "heading-2 mb-6", children: "Our Impact" }), _jsx("p", { className: "body text-gray-300 max-w-3xl mx-auto", children: "Numbers that speak to our success in the crypto finance space." })] }), _jsx("div", { className: "grid md:grid-cols-4 gap-8", children: [
                                { value: "$500M+", label: "Capital Raised" },
                                { value: "100+", label: "Projects Supported" },
                                { value: "50+", label: "Global Investors" },
                                { value: "95%", label: "Client Satisfaction" },
                            ].map((stat, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, className: "text-center", children: [_jsx("div", { className: "text-4xl font-bold text-primary mb-2", children: stat.value }), _jsx("div", { className: "text-gray-300", children: stat.label })] }, stat.label))) })] }) }), _jsx("section", { className: "py-20", children: _jsx("div", { className: "container", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "text-center", children: [_jsx("h2", { className: "heading-2 mb-6", children: "Ready to Join Our Success Stories?" }), _jsx("p", { className: "body text-gray-300 max-w-3xl mx-auto mb-10", children: "Let's discuss how we can help you achieve your goals in the crypto space." }), _jsx(Link, { to: "/contact", className: "btn-primary", children: "Get Started" })] }) }) })] }));
}
