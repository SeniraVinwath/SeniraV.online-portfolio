import { useEffect } from 'react';
import Head from './Head';
import { 
  getCanonicalUrl, 
  enhanceKeywords, 
  getSocialDescription
} from '../utils/seoUtils';

const SEO = ({ title, description, keywords, section }) => {
  const defaultTitle = "Senira Vinwath | Software Engineer & UI Designer | Seniya365";
  const defaultDescription = "Official portfolio of Senira Vinwath (Seniya365) - Software Engineer, Full-stack Developer, UI/UX Designer with expertise in React, Java and WordPress.";
  const defaultKeywords = "Senira Vinwath, Seniya, Seniya365, seniya_365, Software Engineer, UI Designer, Full-Stack Developer";
  
  // Get enhanced title, description, and keywords
  const pageTitle = title 
    ? `${title} | Senira Vinwath (Seniya365)` 
    : defaultTitle;
  
  const pageDescription = description || defaultDescription;
  const enhancedKeywords = enhanceKeywords(section, keywords || defaultKeywords);
  
  // Get canonical URL
  const canonicalUrl = getCanonicalUrl(section);
  
  // Get social media description
  const socialDescription = getSocialDescription(section || 'home');

  // Dynamically update the URL hash based on section
  useEffect(() => {
    if (section) {
      window.history.replaceState(
        null, 
        null, 
        `#${section.toLowerCase()}`
      );
    }
  }, [section]);

  return (
    <Head
      title={pageTitle}
      description={pageDescription}
      keywords={enhancedKeywords}
      canonical={canonicalUrl}
      ogTitle={pageTitle}
      ogDescription={socialDescription}
      ogUrl={canonicalUrl}
      ogImage="https://seniya365.me/profile.jpg" // Replace with your actual image
      twitterTitle={pageTitle}
      twitterDescription={socialDescription}
      twitterImage="https://seniya365.me/profile.jpg" // Replace with your actual image
    />
  );
};

export default SEO;