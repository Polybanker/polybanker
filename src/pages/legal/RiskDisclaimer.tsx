import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const sections = [
  {
    title: "1. No Financial Advice",
    content: `The information provided on this platform is for informational purposes only and does not constitute financial advice. Users should conduct their own research and consult with qualified financial advisors before making any investment decisions.`,
  },
  {
    title: "2. Investment Risks",
    content: `Cryptocurrency investments involve significant risks, including but not limited to:
    • Market volatility
    • Regulatory changes
    • Technical risks
    • Liquidity risks
    • Security risks
    Users should only invest what they can afford to lose.`,
  },
  {
    title: "3. Past Performance",
    content: `Past performance is not indicative of future results. The value of investments can go down as well as up, and investors may not recover the full amount invested.`,
  },
  {
    title: "4. Regulatory Considerations",
    content: `Cryptocurrency regulations vary by jurisdiction and are subject to change. Users are responsible for understanding and complying with applicable laws and regulations in their jurisdiction.`,
  },
  {
    title: "5. Technical Risks",
    content: `Users should be aware of technical risks associated with cryptocurrency, including:
    • Smart contract vulnerabilities
    • Network congestion
    • Protocol changes
    • Technical failures
    • Security breaches`,
  },
  {
    title: "6. Service Limitations",
    content: `Our services may not be suitable for all users. We reserve the right to refuse service to anyone and may limit or terminate services at our discretion.`,
  },
  {
    title: "7. Third-Party Services",
    content: `We may recommend or integrate with third-party services. We are not responsible for the actions, content, or services of third parties. Users should review third-party terms and conditions.`,
  },
  {
    title: "8. No Guarantees",
    content: `We do not guarantee the success of any investment, strategy, or service. All investments carry risk, and users should carefully consider their investment objectives and risk tolerance.`,
  },
  {
    title: "9. Due Diligence",
    content: `Users are responsible for conducting their own due diligence before making any investment decisions. This includes researching projects, understanding risks, and verifying information.`,
  },
  {
    title: "10. Limitation of Liability",
    content: `To the maximum extent permitted by law, we are not liable for any losses, damages, or costs arising from the use of our services or reliance on information provided.`,
  },
];

export default function RiskDisclaimer() {
  return (
    <>
      <Helmet>
        <title>Risk Disclaimer - Polybanker</title>
        <meta name="description" content="Important risk disclaimers and warnings for users of Polybanker's crypto-native private banking and strategic advisory services." />
      </Helmet>

      <section className="pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="heading-1 mb-6">Risk Disclaimer</h1>
            <p className="body-large text-gray-300 mb-12">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 p-6 rounded-lg bg-red-500/10 border border-red-500/20"
            >
              <h2 className="heading-3 mb-4 text-red-500">Important Warning</h2>
              <p className="text-gray-300">
                Cryptocurrency investments are highly speculative and involve significant risks. 
                You should carefully consider whether trading or holding cryptocurrencies is suitable for you in light of your financial condition.
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
              <h2 className="heading-3 mb-4">Acknowledgment</h2>
              <p className="text-gray-300">
                By using our services, you acknowledge that you have read, understood, and agree to this Risk Disclaimer. 
                You understand that cryptocurrency investments involve significant risks and that you are solely responsible for your investment decisions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 