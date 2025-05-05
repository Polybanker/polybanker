import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Innovation',
    description: "Pushing the boundaries of what's possible in crypto finance.",
  },
  {
    title: 'Integrity',
    description: 'Building trust through transparency and the highest ethical practices.',
  },
  {
    title: 'Excellence',
    description: 'Delivering exceptional results through deep expertise.',
  },
  {
    title: 'Partnership',
    description: 'Working closely with clients to achieve their goals.',
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Polybanker</title>
        <meta name="description" content="Learn about Polybanker's mission to revolutionize crypto private banking and our team of experts." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="heading-1 mb-6">About Polybanker</h1>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              We're building the future of crypto private banking, combining traditional financial expertise with cutting-edge blockchain technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="heading-2 mb-6">Our Mission</h2>
            <p className="body text-gray-300">
              To empower crypto founders and investors through strategic fundraising, capital growth, and premium financial services. We bridge the gap between traditional finance and the crypto ecosystem, making sophisticated financial solutions accessible to all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Our Values</h2>
            <p className="body text-gray-300 max-w-3xl mx-auto">
              These core principles guide everything we do at Polybanker.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-dark-lighter border border-white/10"
              >
                <h3 className="heading-4 mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="heading-2 mb-6">Our Approach</h2>
            <p className="body text-gray-300 mb-8">
              We combine deep crypto expertise with traditional financial wisdom to deliver exceptional results for our clients. Our approach is built on three pillars:
            </p>
            <div className="space-y-6 text-left">
              <div className="p-6 rounded-lg bg-dark-lighter border border-white/10">
                <h3 className="heading-4 mb-4">1. Deep Understanding</h3>
                <p className="text-gray-300">
                  We take the time to understand your unique needs, goals, and challenges in the crypto space.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-dark-lighter border border-white/10">
                <h3 className="heading-4 mb-4">2. Strategic Planning</h3>
                <p className="text-gray-300">
                  We develop customized strategies that align with your objectives and market conditions.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-dark-lighter border border-white/10">
                <h3 className="heading-4 mb-4">3. Execution Excellence</h3>
                <p className="text-gray-300">
                  We execute with precision and care, ensuring the best possible outcomes for your project.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 