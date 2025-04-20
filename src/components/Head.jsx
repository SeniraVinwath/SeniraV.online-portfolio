import { useEffect } from 'react';

/**
 * A custom Head component for managing document head elements
 * This replaces react-helmet-async which has compatibility issues with React 19
 */
const Head = ({ 
  title, 
  description, 
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  schema
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }
    
    // Helper to update meta tags
    const updateMetaTag = (name, content) => {
      if (!content) return;
      
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };
    
    // Helper to update Open Graph meta tags
    const updateOgMetaTag = (property, content) => {
      if (!content) return;
      
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };
    
    // Helper to update Twitter meta tags
    const updateTwitterMetaTag = (name, content) => {
      if (!content) return;
      
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };
    
    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Senira Vinwath');
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    
    // Update Open Graph meta tags
    updateOgMetaTag('og:title', ogTitle || title);
    updateOgMetaTag('og:description', ogDescription || description);
    updateOgMetaTag('og:url', ogUrl || canonical);
    updateOgMetaTag('og:image', ogImage);
    updateOgMetaTag('og:type', 'website');
    updateOgMetaTag('og:site_name', 'Senira Vinwath Portfolio');
    
    // Update Twitter meta tags
    updateTwitterMetaTag('twitter:card', 'summary_large_image');
    updateTwitterMetaTag('twitter:title', twitterTitle || ogTitle || title);
    updateTwitterMetaTag('twitter:description', twitterDescription || ogDescription || description);
    updateTwitterMetaTag('twitter:image', twitterImage || ogImage);
    
    // Update canonical link
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }
    
    // Add JSON-LD schema if provided
    if (schema) {
      // Remove any existing schema
      const existingSchema = document.querySelector('script[type="application/ld+json"]');
      if (existingSchema) {
        existingSchema.remove();
      }
      
      // Add new schema
      const scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.textContent = JSON.stringify(schema);
      document.head.appendChild(scriptTag);
    }
    
    // No cleanup needed for SPAs since the Head component should always be mounted
  }, [
    title, 
    description, 
    keywords, 
    canonical, 
    ogTitle, 
    ogDescription, 
    ogUrl, 
    ogImage, 
    twitterTitle, 
    twitterDescription, 
    twitterImage,
    schema
  ]);
  
  return null; // This component doesn't render anything
};

export default Head;