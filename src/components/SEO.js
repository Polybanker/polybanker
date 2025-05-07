import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
const defaultKeywords = [
    'decentralized banking',
    'crypto banking',
    'blockchain finance',
    'DeFi',
    'cryptocurrency',
    'stablecoin',
    'cross-border payments',
    'reputation-based lending',
    'crypto advisory',
    'institutional crypto'
];
const defaultOgImage = 'https://polybanker.com/og-image.jpg';
export default function SEO({ title, description, keywords = defaultKeywords, ogImage = defaultOgImage, ogType = 'website', twitterCard = 'summary_large_image', canonicalUrl }) {
    const siteTitle = 'Polybanker';
    const fullTitle = `${title} | ${siteTitle}`;
    const canonical = canonicalUrl || `https://polybanker.com${window.location.pathname}`;
    return (_jsxs(Helmet, { children: [_jsx("title", { children: fullTitle }), _jsx("meta", { name: "description", content: description }), _jsx("meta", { name: "keywords", content: keywords.join(', ') }), _jsx("link", { rel: "canonical", href: canonical }), _jsx("meta", { property: "og:title", content: fullTitle }), _jsx("meta", { property: "og:description", content: description }), _jsx("meta", { property: "og:type", content: ogType }), _jsx("meta", { property: "og:url", content: canonical }), _jsx("meta", { property: "og:image", content: ogImage }), _jsx("meta", { property: "og:site_name", content: siteTitle }), _jsx("meta", { name: "twitter:card", content: twitterCard }), _jsx("meta", { name: "twitter:title", content: fullTitle }), _jsx("meta", { name: "twitter:description", content: description }), _jsx("meta", { name: "twitter:image", content: ogImage }), _jsx("meta", { name: "robots", content: "index, follow" }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), _jsx("meta", { name: "theme-color", content: "#1a1a1a" }), _jsx("meta", { name: "format-detection", content: "telephone=no" })] }));
}
