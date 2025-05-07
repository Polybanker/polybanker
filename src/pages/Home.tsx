// React is automatically imported by the JSX transform in React 17+
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const coreFeatures = [
  {
    title: 'On-Chain Lending',
    description: 'Reputation-based lending with low/no collateral requirements.',
    href: '/services#lending',
  },
  {
    title: 'DeFi Banking',
    description: 'Interest-bearing accounts with fiat onramp/offramp solutions.',
    href: '/services#banking',
  },
  {
    title: 'Cross-Border Payments',
    description: 'Low-fee remittances and instant payroll processing.',
    href: '/services#payments',
  },
  {
    title: 'USDP Stablecoin',
    description: 'USD-pegged digital dollar for global payments and DeFi.',
    href: '/services#stablecoin',
  },
];

const advisoryServices = [
  {
    title: 'Deal-Making',
    description: 'Strategic capital matchmaking for crypto projects.',
    href: '/services#deal-making',
  },
  {
    title: 'Treasury Management',
    description: 'Professional treasury solutions for DAOs and projects.',
    href: '/services#treasury',
  },
  {
    title: 'Fund Setup',
    description: 'End-to-end support for crypto investment vehicles.',
    href: '/services#fund-setup',
  },
  {
    title: 'Private Banking',
    description: 'Exclusive services for UHNWIs in crypto.',
    href: '/services#private-banking',
  },
];

const testimonials = [
  {
    content: "Polybanker has been instrumental in our fundraising journey. Their expertise in crypto capital markets is unmatched.",
    author: "Sarah Chen",
    role: "CEO, Web3 Startup",
  },
  {
    content: "The team's deep understanding of both traditional finance and crypto has been invaluable for our DAO's treasury management.",
    author: "Michael Rodriguez",
    role: "Treasury Lead, DeFi Protocol",
  },
  {
    content: "Working with Polybanker has transformed our approach to crypto investments. Their strategic guidance is exceptional.",
    author: "David Kim",
    role: "Family Office Director",
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Polybanker - The First Truly Decentralized Crypto Banking Platform</title>
        <meta name="description" content="Polybanker bridges traditional finance and crypto, offering comprehensive banking services, advisory solutions, and institutional-grade DeFi products for the Web3 era." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="heading-1 mb-6">
              The First Truly Decentralized<br />
              <span className="text-primary">Crypto Banking Platform</span>
            </h1>
            <p className="body-large text-gray-300 max-w-3xl mx-auto mb-10">
              Experience the future of banking with our comprehensive suite of crypto-native services, from reputation-based lending to institutional-grade DeFi solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get Started
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Polybanker Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Why Choose Polybanker?</h2>
            <p className="body text-gray-300 max-w-3xl mx-auto">
              We combine deep crypto expertise with traditional financial wisdom to deliver exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Crypto-Native Expertise",
                description: "Deep understanding of blockchain technology and DeFi protocols.",
              },
              {
                title: "Institutional Grade",
                description: "Compliance-first design with robust security measures.",
              },
              {
                title: "Global Network",
                description: "Access to a vast network of investors and industry leaders.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-dark border border-white/10"
              >
                <h3 className="heading-4 mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Core Banking Features</h2>
            <p className="body text-gray-300 max-w-3xl mx-auto">
              Comprehensive crypto-native banking solutions designed for the future of finance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-dark-lighter border border-white/10 hover:border-primary/50 transition-colors"
              >
                <h3 className="heading-4 mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <Link to={feature.href} className="text-primary hover:text-primary-light">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Services Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Advisory & Execution Services</h2>
            <p className="body text-gray-300 max-w-3xl mx-auto">
              Expert guidance and execution support for your crypto journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisoryServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-dark border border-white/10 hover:border-primary/50 transition-colors"
              >
                <h3 className="heading-4 mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <Link to={service.href} className="text-primary hover:text-primary-light">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">What Our Clients Say</h2>
            <p className="body text-gray-300 max-w-3xl mx-auto">
              Trusted by leading crypto projects and investors worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-dark-lighter border border-white/10"
              >
                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="heading-2 mb-6">Ready to Transform Your Crypto Journey?</h2>
            <p className="body text-gray-300 max-w-3xl mx-auto mb-10">
              Join the growing list of successful projects and investors who trust Polybanker for their financial needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact?type=startup" className="btn-primary">
                Apply as a Startup
              </Link>
              <Link to="/contact?type=investor" className="btn-secondary">
                Join as an Investor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}