import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const sections = [
  {
    title: "1. Introduction",
    content: `Polybanker is committed to protecting your privacy and ensuring the security of your personal data. This GDPR Policy outlines how we collect, use, and protect your personal information in compliance with the General Data Protection Regulation (GDPR).`,
  },
  {
    title: "2. Data Controller",
    content: `Polybanker acts as the data controller for the personal data we collect and process. We are responsible for ensuring that your data is processed in accordance with GDPR requirements.`,
  },
  {
    title: "3. Personal Data We Collect",
    content: `We collect and process the following categories of personal data:
    • Identity information (name, email, phone number)
    • Financial information
    • Transaction history
    • Technical data (IP address, device information)
    • Communication preferences
    • KYC/AML documentation`,
  },
  {
    title: "4. Legal Basis for Processing",
    content: `We process your personal data based on the following legal grounds:
    • Performance of a contract
    • Legal obligations
    • Legitimate interests
    • Your consent
    • Protection of vital interests`,
  },
  {
    title: "5. Your Rights",
    content: `Under GDPR, you have the following rights:
    • Right to access your personal data
    • Right to rectification of inaccurate data
    • Right to erasure ("right to be forgotten")
    • Right to restrict processing
    • Right to data portability
    • Right to object to processing
    • Right to withdraw consent`,
  },
  {
    title: "6. Data Retention",
    content: `We retain your personal data only for as long as necessary to:
    • Fulfill the purposes for which it was collected
    • Comply with legal obligations
    • Resolve disputes
    • Enforce our agreements`,
  },
  {
    title: "7. Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal data, including:
    • Encryption of data in transit and at rest
    • Regular security assessments
    • Access controls and authentication
    • Staff training on data protection
    • Incident response procedures`,
  },
  {
    title: "8. International Data Transfers",
    content: `When we transfer your data outside the EEA, we ensure appropriate safeguards are in place through:
    • Standard contractual clauses
    • Binding corporate rules
    • Adequacy decisions
    • Appropriate security measures`,
  },
  {
    title: "9. Data Breach Notification",
    content: `In case of a personal data breach, we will:
    • Notify the relevant supervisory authority
    • Inform affected individuals
    • Document all breaches
    • Take remedial action
    • Review and improve security measures`,
  },
  {
    title: "10. Changes to This Policy",
    content: `We may update this GDPR Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.`,
  },
];

export default function GDPR() {
  return (
    <>
      <Helmet>
        <title>GDPR Policy - Polybanker</title>
        <meta name="description" content="Polybanker's GDPR policy detailing how we protect your personal data and comply with the General Data Protection Regulation." />
      </Helmet>

      <section className="pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="heading-1 mb-6">GDPR Policy</h1>
            <p className="body-large text-gray-300 mb-12">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 p-6 rounded-lg bg-blue-500/10 border border-blue-500/20"
            >
              <h2 className="heading-3 mb-4 text-blue-500">Your Data Protection Rights</h2>
              <p className="text-gray-300">
                Under the General Data Protection Regulation (GDPR), you have several rights regarding your personal data. 
                We are committed to helping you exercise these rights and ensuring the protection of your personal information.
              </p>
            </motion.div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h2 className="heading-3 mb-4">{section.title}</h2>
                  <p className="text-gray-300 whitespace-pre-line">{section.content}</p>
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
              <h2 className="heading-3 mb-4">Contact Our Data Protection Officer</h2>
              <p className="text-gray-300">
                If you have any questions about this GDPR Policy or wish to exercise your data protection rights, 
                please contact our Data Protection Officer at privacy@polybanker.com.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 