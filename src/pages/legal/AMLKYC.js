import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
const sections = [
    {
        title: "1. Introduction",
        content: `Polybanker is committed to maintaining the highest standards of anti-money laundering (AML) and know-your-customer (KYC) compliance. This policy outlines our procedures for preventing money laundering, terrorist financing, and other financial crimes.`,
    },
    {
        title: "2. Customer Due Diligence",
        content: `We conduct thorough due diligence on all customers, including:
    • Identity verification
    • Source of funds verification
    • Risk assessment
    • Ongoing monitoring
    • Enhanced due diligence for high-risk customers`,
    },
    {
        title: "3. Required Documentation",
        content: `Customers must provide the following documentation:
    • Government-issued photo ID
    • Proof of address
    • Source of funds documentation
    • Business registration documents (for corporate accounts)
    • Beneficial ownership information`,
    },
    {
        title: "4. Risk Assessment",
        content: `We assess customer risk based on:
    • Geographic location
    • Transaction patterns
    • Business activities
    • Political exposure
    • Regulatory requirements`,
    },
    {
        title: "5. Transaction Monitoring",
        content: `We monitor all transactions for suspicious activity, including:
    • Unusual transaction patterns
    • Large transactions
    • High-risk jurisdictions
    • Structuring attempts
    • Suspicious behavior`,
    },
    {
        title: "6. Reporting Requirements",
        content: `We are required to report:
    • Suspicious transactions
    • Large cash transactions
    • Terrorist financing
    • Other suspicious activities
    Reports are made to relevant authorities as required by law.`,
    },
    {
        title: "7. Record Keeping",
        content: `We maintain records of:
    • Customer identification
    • Transaction history
    • Due diligence documentation
    • Risk assessments
    • Compliance reports
    Records are kept for a minimum of 5 years.`,
    },
    {
        title: "8. Staff Training",
        content: `Our staff receives regular training on:
    • AML/KYC procedures
    • Risk assessment
    • Suspicious activity detection
    • Regulatory requirements
    • Compliance updates`,
    },
    {
        title: "9. Sanctions Compliance",
        content: `We screen all customers against:
    • Global sanctions lists
    • Politically exposed persons (PEP) lists
    • Adverse media
    • Other relevant watchlists`,
    },
    {
        title: "10. Policy Updates",
        content: `This policy is reviewed and updated regularly to ensure compliance with:
    • Regulatory requirements
    • Industry best practices
    • Emerging risks
    • Technological developments`,
    },
];
export default function AMLKYC() {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "AML/KYC Policy - Polybanker" }), _jsx("meta", { name: "description", content: "Anti-money laundering and know-your-customer policies for Polybanker's crypto-native private banking and strategic advisory services." })] }), _jsx("section", { className: "pt-32 pb-20", children: _jsx("div", { className: "container", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "max-w-4xl mx-auto", children: [_jsx("h1", { className: "heading-1 mb-6", children: "AML/KYC Policy" }), _jsxs("p", { className: "body-large text-gray-300 mb-12", children: ["Last updated: ", new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "mb-12 p-6 rounded-lg bg-blue-500/10 border border-blue-500/20", children: [_jsx("h2", { className: "heading-3 mb-4 text-blue-500", children: "Compliance Commitment" }), _jsx("p", { className: "text-gray-300", children: "Polybanker is committed to maintaining the highest standards of compliance with anti-money laundering and know-your-customer regulations. We work closely with regulatory authorities to prevent financial crime and protect our customers." })] }), _jsx("div", { className: "space-y-12", children: sections.map((section, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, children: [_jsx("h2", { className: "heading-3 mb-4", children: section.title }), _jsx("p", { className: "text-gray-300 whitespace-pre-line", children: section.content })] }, section.title))) }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "mt-12 p-6 rounded-lg bg-dark-lighter border border-white/10", children: [_jsx("h2", { className: "heading-3 mb-4", children: "Contact Information" }), _jsx("p", { className: "text-gray-300", children: "For questions about our AML/KYC policy or to report suspicious activity, please contact our compliance team at compliance@polybanker.com." })] })] }) }) })] }));
}
