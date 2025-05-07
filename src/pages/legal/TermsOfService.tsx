import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const sections = [
  {
    title: "1. Agreement to Terms",
    content: `By accessing or using Polybanker's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.`,
  },
  {
    title: "2. Services Description",
    content: `Polybanker provides crypto-native private banking and strategic advisory services, including:
    • Portfolio management
    • Investment advisory
    • Treasury management
    • Strategic consulting
    • Risk management
    • Compliance services`,
  },
  {
    title: "3. User Eligibility",
    content: `To use our services, you must:
    • Be at least 18 years old
    • Have legal capacity to enter into contracts
    • Meet our KYC/AML requirements
    • Not be prohibited from using our services under applicable laws
    • Have sufficient funds to meet minimum requirements`,
  },
  {
    title: "4. Account Registration",
    content: `When registering for an account, you must:
    • Provide accurate and complete information
    • Maintain the security of your account
    • Notify us of any unauthorized access
    • Not share your account credentials
    • Update your information as needed`,
  },
  {
    title: "5. Fees and Payments",
    content: `Our fee structure includes:
    • Management fees
    • Performance fees
    • Transaction fees
    • Advisory fees
    • Other applicable charges
    All fees are subject to change with notice.`,
  },
  {
    title: "6. Investment Risks",
    content: `You acknowledge that:
    • Cryptocurrency investments are speculative
    • Past performance is not indicative of future results
    • You may lose some or all of your investment
    • We do not guarantee returns
    • You are responsible for your investment decisions`,
  },
  {
    title: "7. Intellectual Property",
    content: `All content, trademarks, and intellectual property rights are owned by Polybanker. You may not:
    • Copy or reproduce our materials
    • Use our trademarks without permission
    • Reverse engineer our technology
    • Remove copyright notices
    • Create derivative works`,
  },
  {
    title: "8. Privacy and Data Protection",
    content: `We collect and process personal data in accordance with:
    • Our Privacy Policy
    • Applicable data protection laws
    • Industry best practices
    • Security standards
    • Regulatory requirements`,
  },
  {
    title: "9. Termination",
    content: `We may terminate or suspend your account if you:
    • Violate these terms
    • Engage in fraudulent activity
    • Fail to meet compliance requirements
    • Breach security protocols
    • Misuse our services`,
  },
  {
    title: "10. Limitation of Liability",
    content: `To the maximum extent permitted by law:
    • We are not liable for indirect damages
    • Our liability is limited to fees paid
    • We are not responsible for third-party actions
    • We do not guarantee service availability
    • We are not liable for market losses`,
  },
  {
    title: "11. Dispute Resolution",
    content: `Any disputes shall be resolved through:
    • Good faith negotiations
    • Mediation
    • Arbitration
    • Applicable law
    • Jurisdiction as specified`,
  },
  {
    title: "12. Changes to Terms",
    content: `We may modify these terms at any time. Changes will be effective upon posting. Continued use of our services constitutes acceptance of modified terms.`,
  },
];

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Polybanker</title>
        <meta name="description" content="Terms and conditions for using Polybanker's crypto-native private banking and strategic advisory services." />
      </Helmet>

      <section className="pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="heading-1 mb-6">Terms of Service</h1>
            <p className="body-large text-gray-300 mb-12">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 p-6 rounded-lg bg-yellow-500/10 border border-yellow-500/20"
            >
              <h2 className="heading-3 mb-4 text-yellow-500">Important Notice</h2>
              <p className="text-gray-300">
                Please read these Terms of Service carefully before using our services. By accessing or using Polybanker's services, 
                you agree to be bound by these terms. If you do not agree to these terms, please do not use our services.
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
              <h2 className="heading-3 mb-4">Contact Information</h2>
              <p className="text-gray-300">
                For questions about these Terms of Service, please contact us at legal@polybanker.com.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 