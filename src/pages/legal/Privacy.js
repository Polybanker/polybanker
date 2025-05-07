import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
const sections = [
    {
        title: "1. Information We Collect",
        content: `We collect information that you provide directly to us, including but not limited to:
    • Personal identification information (name, email, phone number)
    • Company information
    • Financial information
    • Technical information about your device and usage
    • Communication preferences`,
    },
    {
        title: "2. How We Use Your Information",
        content: `We use the collected information to:
    • Provide and improve our services
    • Process your applications and requests
    • Communicate with you about our services
    • Ensure compliance with legal obligations
    • Protect against fraud and unauthorized access`,
    },
    {
        title: "3. Information Sharing",
        content: `We may share your information with:
    • Service providers who assist in our operations
    • Legal authorities when required by law
    • Business partners with your consent
    We do not sell your personal information to third parties.`,
    },
    {
        title: "4. Data Security",
        content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.`,
    },
    {
        title: "5. Your Rights",
        content: `Under GDPR and other applicable laws, you have the right to:
    • Access your personal information
    • Correct inaccurate data
    • Request deletion of your data
    • Object to processing
    • Data portability
    • Withdraw consent`,
    },
    {
        title: "6. Cookies and Tracking",
        content: `We use cookies and similar tracking technologies to:
    • Remember your preferences
    • Analyze website usage
    • Improve our services
    You can control cookie settings through your browser preferences.`,
    },
    {
        title: "7. International Data Transfers",
        content: `Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.`,
    },
    {
        title: "8. Data Retention",
        content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.`,
    },
    {
        title: "9. Children's Privacy",
        content: `Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.`,
    },
    {
        title: "10. Changes to This Policy",
        content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.`,
    },
];
export default function Privacy() {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Privacy Policy - Polybanker" }), _jsx("meta", { name: "description", content: "Polybanker's privacy policy detailing how we collect, use, and protect your personal information." })] }), _jsx("section", { className: "pt-32 pb-20", children: _jsx("div", { className: "container", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "max-w-4xl mx-auto", children: [_jsx("h1", { className: "heading-1 mb-6", children: "Privacy Policy" }), _jsxs("p", { className: "body-large text-gray-300 mb-12", children: ["Last updated: ", new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })] }), _jsx("div", { className: "space-y-12", children: sections.map((section, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, children: [_jsx("h2", { className: "heading-3 mb-4", children: section.title }), _jsx("p", { className: "text-gray-300 whitespace-pre-line", children: section.content })] }, section.title))) }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "mt-12 p-6 rounded-lg bg-dark-lighter border border-white/10", children: [_jsx("h2", { className: "heading-3 mb-4", children: "Contact Us" }), _jsxs("p", { className: "text-gray-300", children: ["If you have any questions about this Privacy Policy or our data practices, please contact us at:", _jsx("br", {}), "Email: privacy@polybanker.com", _jsx("br", {}), "Address: [Your Business Address]"] })] })] }) }) })] }));
}
