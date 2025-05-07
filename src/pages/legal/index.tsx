import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const legalDocuments = [
  {
    title: "Terms of Service",
    description: "The terms and conditions governing your use of Polybanker's services.",
    path: "/legal/terms-of-service",
    icon: "📜",
  },
  {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal information.",
    path: "/legal/privacy",
    icon: "🔒",
  },
  {
    title: "Risk Disclaimer",
    description: "Important information about the risks associated with cryptocurrency investments.",
    path: "/legal/risk-disclaimer",
    icon: "⚠️",
  },
  {
    title: "AML/KYC Policy",
    description: "Our anti-money laundering and know-your-customer procedures.",
    path: "/legal/aml-kyc",
    icon: "🛡️",
  },
  {
    title: "GDPR Policy",
    description: "How we comply with the General Data Protection Regulation and protect your data rights.",
    path: "/legal/gdpr",
    icon: "📋",
  },
];

export default function LegalIndex() {
  return (
    <>
      <Helmet>
        <title>Legal Documents - Polybanker</title>
        <meta name="description" content="Access Polybanker's legal documents, including Terms of Service, Privacy Policy, Risk Disclaimer, AML/KYC Policy, and GDPR Policy." />
      </Helmet>

      <section className="pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="heading-1 mb-6">Legal Documents</h1>
            <p className="body-large text-gray-300 mb-12">
              Important legal information and policies governing your use of Polybanker's services.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {legalDocuments.map((doc, index) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={doc.path}
                    className="block p-6 rounded-lg bg-dark-lighter border border-white/10 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{doc.icon}</span>
                      <div>
                        <h2 className="heading-3 mb-2">{doc.title}</h2>
                        <p className="text-gray-300">{doc.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 p-6 rounded-lg bg-dark-lighter border border-white/10"
            >
              <h2 className="heading-3 mb-4">Contact Our Legal Team</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about our legal documents or policies, please contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hello@polybanker.com"
                  className="btn btn-primary"
                >
                  Email Legal Team
                </a>
                <Link
                  to="/contact"
                  className="btn btn-outline"
                >
                  Contact Support
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 