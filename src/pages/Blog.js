import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const blogPosts = [
    {
        id: 1,
        title: "The Future of DeFi: Trends to Watch in 2024",
        excerpt: "Explore the emerging trends and innovations shaping the decentralized finance landscape in the coming year.",
        category: "DeFi",
        date: "2024-03-15",
        readTime: "5 min read",
        image: "/blog/defi-trends.jpg",
    },
    {
        id: 2,
        title: "Treasury Management Best Practices for DAOs",
        excerpt: "Learn essential strategies for managing DAO treasuries effectively and ensuring long-term sustainability.",
        category: "Treasury",
        date: "2024-03-10",
        readTime: "7 min read",
        image: "/blog/dao-treasury.jpg",
    },
    {
        id: 3,
        title: "Navigating Crypto Fund Formation",
        excerpt: "A comprehensive guide to setting up and structuring crypto investment funds in today's regulatory landscape.",
        category: "Funds",
        date: "2024-03-05",
        readTime: "8 min read",
        image: "/blog/crypto-funds.jpg",
    },
    {
        id: 4,
        title: "Strategic Partnerships in Web3",
        excerpt: "How to build and maintain successful partnerships in the decentralized ecosystem.",
        category: "Strategy",
        date: "2024-02-28",
        readTime: "6 min read",
        image: "/blog/web3-partnerships.jpg",
    },
    {
        id: 5,
        title: "Risk Management in Crypto Markets",
        excerpt: "Essential risk management strategies for navigating volatile crypto markets.",
        category: "Risk",
        date: "2024-02-20",
        readTime: "6 min read",
        image: "/blog/risk-management.jpg",
    },
    {
        id: 6,
        title: "The Evolution of Token Economics",
        excerpt: "Understanding the latest developments in token design and economic models.",
        category: "Tokens",
        date: "2024-02-15",
        readTime: "7 min read",
        image: "/blog/token-economics.jpg",
    },
];
const categories = [
    'All',
    'DeFi',
    'Treasury',
    'Funds',
    'Strategy',
    'Risk',
    'Tokens',
];
export default function Blog() {
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const filteredPosts = selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Blog - Polybanker" }), _jsx("meta", { name: "description", content: "Stay updated with the latest insights on DeFi, treasury management, and crypto finance from Polybanker's expert team." })] }), _jsx("section", { className: "pt-32 pb-20", children: _jsx("div", { className: "container", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "text-center", children: [_jsx("h1", { className: "heading-1 mb-6", children: "Blog" }), _jsx("p", { className: "body-large text-gray-300 max-w-3xl mx-auto", children: "Insights, analysis, and expert perspectives on the future of crypto finance." })] }) }) }), _jsx("section", { className: "py-10", children: _jsx("div", { className: "container", children: _jsx("div", { className: "flex flex-wrap justify-center gap-4", children: categories.map(category => (_jsx("button", { onClick: () => setSelectedCategory(category), className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                                ? 'bg-primary text-white'
                                : 'bg-dark-lighter text-gray-300 hover:bg-dark'}`, children: category }, category))) }) }) }), _jsx("section", { className: "py-20", children: _jsx("div", { className: "container", children: _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredPosts.map((post, index) => (_jsx(motion.article, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, className: "group", children: _jsxs(Link, { to: `/blog/${post.id}`, className: "block", children: [_jsxs("div", { className: "relative aspect-[16/9] mb-4 rounded-lg overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-dark-lighter" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }), _jsx("div", { className: "absolute bottom-4 left-4", children: _jsx("span", { className: "inline-block px-3 py-1 text-sm font-medium text-white bg-primary/20 rounded-full", children: post.category }) })] }), _jsx("h2", { className: "heading-4 mb-2 group-hover:text-primary transition-colors", children: post.title }), _jsx("p", { className: "text-gray-300 mb-4 line-clamp-2", children: post.excerpt }), _jsxs("div", { className: "flex items-center text-sm text-gray-400", children: [_jsx("time", { dateTime: post.date, children: new Date(post.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                }) }), _jsx("span", { className: "mx-2", children: "\u2022" }), _jsx("span", { children: post.readTime })] })] }) }, post.id))) }) }) }), _jsx("section", { className: "py-20 bg-dark-lighter", children: _jsx("div", { className: "container", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "max-w-3xl mx-auto text-center", children: [_jsx("h2", { className: "heading-2 mb-6", children: "Stay Updated" }), _jsx("p", { className: "body text-gray-300 mb-8", children: "Subscribe to our newsletter for the latest insights and updates from the crypto finance world." }), _jsxs("form", { className: "flex gap-4 max-w-xl mx-auto", children: [_jsx("input", { type: "email", placeholder: "Enter your email", className: "flex-1 px-4 py-2 rounded-lg bg-dark border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary", required: true }), _jsx("button", { type: "submit", className: "btn-primary", children: "Subscribe" })] })] }) }) })] }));
}
