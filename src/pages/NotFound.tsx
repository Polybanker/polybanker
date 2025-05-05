import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Polybanker</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="heading-1 mb-6">404</h1>
            <h2 className="heading-2 mb-6">Page Not Found</h2>
            <p className="body-large text-gray-300 max-w-2xl mx-auto mb-10">
              The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="btn-primary">
                Go Home
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 