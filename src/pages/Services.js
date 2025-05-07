import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// React is automatically imported by the JSX transform
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
const coreServices = [
    {
        title: "On-Chain Lending & Borrowing",
        description: "Access reputation-based lending with low/no collateral requirements using on-chain credit scores, and tap into institutional lending pools bringing TradFi liquidity into DeFi.",
        icon: "💱",
        features: [
            "Reputation-based lending",
            "Low/no collateral loans",
            "On-chain credit scoring",
            "Institutional lending pools",
            "Smart contract lending pools"
        ]
    },
    {
        title: "DeFi-Powered Banking Accounts",
        description: "Earn yield on your stablecoins with our interest-bearing accounts, featuring DeFi-friendly fiat onramp and offramp solutions.",
        icon: "🏦",
        features: [
            "Interest-bearing accounts",
            "Stablecoin yield generation",
            "Fiat onramp solutions",
            "Fiat offramp solutions",
            "Non-custodial design"
        ]
    },
    {
        title: "Cross-Border Payments",
        description: "Experience fast, cost-effective international transfers using stablecoins, with instant payroll processing for remote workers.",
        icon: "🌍",
        features: [
            "Low-fee remittances",
            "Instant payroll processing",
            "Multi-stablecoin support",
            "Global payment network",
            "Automated salary payouts"
        ]
    },
    {
        title: "Polybanker Stablecoin (USDP)",
        description: "Our USD-pegged stablecoin is designed for global payments, savings, and DeFi integration, with potential compliance with MiCA and CBDCs.",
        icon: "💵",
        features: [
            "USD-pegged stability",
            "MiCA compliance ready",
            "CBDC integration potential",
            "Global payment solution",
            "Institutional settlements"
        ]
    },
    {
        title: "Institutional Integration",
        description: "Access compliance-friendly banking solutions for hedge funds and institutions, featuring transparent, non-custodial asset management through smart contracts.",
        icon: "⚖️",
        features: [
            "Institutional-grade compliance",
            "Smart contract management",
            "Non-custodial solutions",
            "Regulatory alignment",
            "DeFi banking for institutions"
        ]
    }
];
const advisoryServices = [
    {
        title: "Deal-Making",
        description: "Strategic capital matchmaking for crypto projects and investors, connecting them with aligned partners.",
        icon: "🤝",
        features: [
            "Investor introductions",
            "Pitch deck review",
            "Tokenomics analysis",
            "Strategic alignment",
            "Success-based fees"
        ]
    },
    {
        title: "Tokenized Fundraising",
        description: "Expert support for token-based capital raises with comprehensive legal and technical guidance.",
        icon: "🪙",
        features: [
            "SAFT/SAFE structuring",
            "Legal compliance",
            "Token design",
            "Jurisdictional support",
            "Performance incentives"
        ]
    },
    {
        title: "Treasury Management",
        description: "Strategic crypto treasury advisory and execution for DAOs and projects.",
        icon: "📊",
        features: [
            "Portfolio design",
            "Risk management",
            "Multi-sig setup",
            "Yield optimization",
            "Asset allocation"
        ]
    },
    {
        title: "Liquidity Solutions",
        description: "Custom liquidity support for digital assets with comprehensive market making strategies.",
        icon: "💹",
        features: [
            "OTC trading",
            "Market making",
            "Listing strategy",
            "Volume support",
            "Custom solutions"
        ]
    },
    {
        title: "Fund Setup",
        description: "End-to-end support to launch your crypto investment vehicle with proper structuring.",
        icon: "🏛️",
        features: [
            "Legal entity formation",
            "Fund architecture",
            "Offshore options",
            "Ongoing support",
            "Compliance setup"
        ]
    },
    {
        title: "Strategic Partnerships",
        description: "Fueling growth through ecosystem and enterprise connections.",
        icon: "🌐",
        features: [
            "Ecosystem integration",
            "Partnership sourcing",
            "Growth strategy",
            "Co-marketing",
            "Token incentives"
        ]
    },
    {
        title: "Smart Contract Audits",
        description: "Ensuring smart contract and codebase security through comprehensive audits.",
        icon: "🔍",
        features: [
            "Code review",
            "Vulnerability assessment",
            "Risk reporting",
            "Security recommendations",
            "Multiple audit options"
        ]
    },
    {
        title: "Regulatory Compliance",
        description: "Navigate crypto regulations with confidence through expert guidance.",
        icon: "⚖️",
        features: [
            "Global regulatory mapping",
            "KYC/AML infrastructure",
            "Licensing advisory",
            "Compliance frameworks",
            "Tiered packages"
        ]
    },
    {
        title: "Family Office Advisory",
        description: "Trusted advisors for high-net-worth crypto investors.",
        icon: "💼",
        features: [
            "Portfolio construction",
            "Risk management",
            "Education sessions",
            "Wealth planning",
            "AUM-based services"
        ]
    },
    {
        title: "Private Banking",
        description: "Exclusive services for ultra-high-net-worth individuals in the crypto space.",
        icon: "🔐",
        features: [
            "Tax planning",
            "Private deals access",
            "DeFi strategies",
            "White-glove service",
            "Invite-only access"
        ]
    }
];
export default function Services() {
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Our Services", description: "Discover Polybanker's comprehensive suite of decentralized banking services and crypto advisory solutions. From reputation-based lending to institutional crypto services, we're building the future of finance.", keywords: [
                    'decentralized banking services',
                    'crypto advisory',
                    'reputation-based lending',
                    'institutional crypto',
                    'stablecoin solutions',
                    'cross-border payments',
                    'crypto-powered banking',
                    'DeFi services',
                    'blockchain finance',
                    'crypto institutional adoption'
                ], ogType: "website", twitterCard: "summary_large_image" }), _jsx("div", { className: "min-h-screen bg-dark text-white py-20", children: _jsx("section", { className: "pt-32 pb-20", children: _jsxs("div", { className: "container", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "max-w-4xl mx-auto text-center mb-16", children: [_jsx("h1", { className: "heading-1 mb-6", children: "Our Services" }), _jsx("p", { className: "body-large text-gray-300", children: "The First Truly Decentralized Crypto Banking Platform, bringing traditional banking services on-chain with institutional-grade security and compliance." })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "heading-2 mb-8 text-center", children: "Core Banking Features" }), _jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: coreServices.map((service, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, className: "p-6 rounded-lg bg-dark-lighter border border-white/10 hover:border-primary/50 transition-colors", children: [_jsx("div", { className: "text-4xl mb-4", children: service.icon }), _jsx("h2", { className: "heading-3 mb-4", children: service.title }), _jsx("p", { className: "text-gray-300 mb-6", children: service.description }), _jsx("ul", { className: "space-y-2", children: service.features.map((feature) => (_jsxs("li", { className: "flex items-center text-gray-300", children: [_jsx("svg", { className: "h-5 w-5 text-primary mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }), feature] }, feature))) })] }, service.title))) })] }), _jsxs("div", { children: [_jsx("h2", { className: "heading-2 mb-8 text-center", children: "Advisory & Execution Services" }), _jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: advisoryServices.map((service, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, className: "p-6 rounded-lg bg-dark-lighter border border-white/10 hover:border-primary/50 transition-colors", children: [_jsx("div", { className: "text-4xl mb-4", children: service.icon }), _jsx("h2", { className: "heading-3 mb-4", children: service.title }), _jsx("p", { className: "text-gray-300 mb-6", children: service.description }), _jsx("ul", { className: "space-y-2", children: service.features.map((feature) => (_jsxs("li", { className: "flex items-center text-gray-300", children: [_jsx("svg", { className: "h-5 w-5 text-primary mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }), feature] }, feature))) })] }, service.title))) })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "mt-16 text-center", children: _jsx(Link, { to: "/contact", className: "btn btn-primary", children: "Get Started" }) })] }) }) })] }));
}
