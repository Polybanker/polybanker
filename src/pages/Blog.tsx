import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "The Future of DeFi: Trends to Watch in 2024",
    excerpt: "Explore the emerging trends and innovations shaping the decentralized finance landscape in the coming year.",
    category: "DeFi",
    date: "2024-03-15",
    readTime: "5 min read",
    image: "/blog/defi-trends.jpg",
  },
  {
    id: 2,
    title: "Treasury Management Best Practices for DAOs",
    excerpt: "Learn essential strategies for managing DAO treasuries effectively and ensuring long-term sustainability.",
    category: "Treasury",
    date: "2024-03-10",
    readTime: "7 min read",
    image: "/blog/dao-treasury.jpg",
  },
  {
    id: 3,
    title: "Navigating Crypto Fund Formation",
    excerpt: "A comprehensive guide to setting up and structuring crypto investment funds in today's regulatory landscape.",
    category: "Funds",
    date: "2024-03-05",
    readTime: "8 min read",
    image: "/blog/crypto-funds.jpg",
  },
  {
    id: 4,
    title: "Strategic Partnerships in Web3",
    excerpt: "How to build and maintain successful partnerships in the decentralized ecosystem.",
    category: "Strategy",
    date: "2024-02-28",
    readTime: "6 min read",
    image: "/blog/web3-partnerships.jpg",
  },
  {
    id: 5,
    title: "Risk Management in Crypto Markets",
    excerpt: "Essential risk management strategies for navigating volatile crypto markets.",
    category: "Risk",
    date: "2024-02-20",
    readTime: "6 min read",
    image: "/blog/risk-management.jpg",
  },
  {
    id: 6,
    title: "The Evolution of Token Economics",
    excerpt: "Understanding the latest developments in token design and economic models.",
    category: "Tokens",
    date: "2024-02-15",
    readTime: "7 min read",
    image: "/blog/token-economics.jpg",
  },
];

const categories = [
  'All',
  'DeFi',
  'Treasury',
  'Funds',
  'Strategy',
  'Risk',
  'Tokens',
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Blog - Polybanker</title>
        <meta name="description" content="Stay updated with the latest insights on DeFi, treasury management, and crypto finance from Polybanker's expert team." />
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
            <h1 className="heading-1 mb-6">Blog</h1>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Insights, analysis, and expert perspectives on the future of crypto finance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-dark-lighter text-gray-300 hover:bg-dark'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="relative aspect-[16/9] mb-4 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-dark-lighter" />
                    {/* TODO: Add actual image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-primary/20 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <h2 className="heading-4 mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="heading-2 mb-6">Stay Updated</h2>
            <p className="body text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights and updates from the crypto finance world.
            </p>
            <form className="flex gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-dark border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
} 