import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
}

const defaultKeywords = [
  'decentralized banking',
  'crypto banking',
  'blockchain finance',
  'DeFi',
  'cryptocurrency',
  'stablecoin',
  'cross-border payments',
  'reputation-based lending',
  'crypto advisory',
  'institutional crypto'
];

const defaultOgImage = 'https://polybanker.com/og-image.jpg';

export default function SEO({
  title,
  description,
  keywords = defaultKeywords,
  ogImage = defaultOgImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl
}: SEOProps) {
  const siteTitle = 'Polybanker';
  const fullTitle = `${title} | ${siteTitle}`;
  const canonical = canonicalUrl || `https://polybanker.com${window.location.pathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1a1a1a" />
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
  );
} 