import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Fay_salwani - Full Stack Developer & UI/UX Designer',
  description = 'Professional Portfolio Website - Full Stack Developer & UI/UX Designer specializing in React, Node.js, and modern web technologies.',
  keywords = 'portfolio, developer, full stack, react, node.js, ui/ux design, web development, javascript, typescript',
  image = 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200',
  url = 'https://faysalwani.vercel.app',
  type = 'website'
}) => {
  const fullTitle = title.includes('Fay_salwani') ? title : `${title} | Fay_salwani`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Fay_salwani" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Fay_salwani Portfolio" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@faysalwani" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Fay_salwani",
          "jobTitle": "Full Stack Developer & UI/UX Designer",
          "url": url,
          "image": image,
          "sameAs": [
            "https://github.com/faysalwani",
            "https://linkedin.com/in/faysalwani",
            "https://twitter.com/faysalwani"
          ],
          "knowsAbout": [
            "Web Development",
            "Full Stack Development",
            "React",
            "Node.js",
            "UI/UX Design",
            "JavaScript",
            "TypeScript"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;