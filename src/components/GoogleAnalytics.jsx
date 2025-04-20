import React, { useEffect } from 'react';

// Your actual Google Analytics tracking ID
const GA_TRACKING_ID = 'G-NRNQJJNNVF';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_path: window.location.pathname + window.location.hash,
    });

    // Track page views on hash change
    const handleHashChange = () => {
      const page_path = window.location.pathname + window.location.hash;
      gtag('config', GA_TRACKING_ID, { page_path });
      
      // Track specific sections with custom names for better analytics
      const sectionName = window.location.hash.replace('#', '') || 'home';
      gtag('event', 'page_view', {
        page_title: `Senira Vinwath | ${sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}`,
        page_location: window.location.href,
        page_path: page_path,
        send_to: GA_TRACKING_ID
      });
    };
    window.addEventListener('hashchange', handleHashChange);
    
    // Clean up
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;