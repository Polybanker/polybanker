import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-white/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                className="h-8 w-auto"
                src="/polybanker.png"
                alt="Polybanker"
              />
              <span className="ml-2 text-xl font-bold text-white">Polybanker</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Get Started
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden"
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block text-base font-medium text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block btn btn-primary w-full text-center"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </motion.div>
    </header>
  );
} 