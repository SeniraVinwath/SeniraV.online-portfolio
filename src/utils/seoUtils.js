// SEO utility functions to help with various optimizations

/**
 * Generate canonical URL based on current section
 * @param {string} section - The current active section
 * @returns {string} - The canonical URL
 */
export const getCanonicalUrl = (section) => {
    const baseUrl = 'https://seniya365.me';
    if (!section || section === 'home') {
      return baseUrl;
    }
    return `${baseUrl}/#${section}`;
  };
  
  /**
   * Generate rich keywords based on the section and name variations
   * @param {string} section - The current active section
   * @param {string} baseKeywords - The base keywords from component
   * @returns {string} - Enhanced keywords
   */
  export const enhanceKeywords = (section, baseKeywords = '') => {
    // Name variations to always include
    const nameVariations = 'Senira Vinwath, Seniya365, seniya_365, Senira, Seniya, Seniya 365, Seniya, Vinwath, Juliyan Senira, Juliyan Senira Vinwath, Senira Mendis, Vinwath Mendis';
    
    // Section-specific additional keywords
    const sectionKeywords = {
      home: 'portfolio, software engineer, UI designer, Sri Lanka developer',
      services: 'web development, app development, UI/UX design, tech consulting',
      skills: 'Java, JavaScript, React, WordPress, Python, Figma, Photoshop',
      portfolio: 'projects, web design, application development, branding, Ceyltra',
      resume: 'experience, education, CTO, tech lead, career, Westminster',
      testimonials: 'reviews, feedback, client testimonials, references',
      contact: 'hire, freelance, contact details, project inquiry'
    };
  
    // Combine all keywords
    return `${nameVariations}, ${baseKeywords}, ${sectionKeywords[section] || ''}`;
  };
  
  /**
   * Generate primary and secondary headings for SEO
   * @param {string} section - The current active section
   * @returns {Object} - Object with primary and secondary headings
   */
  export const getSeoHeadings = (section) => {
    const headings = {
      home: {
        primary: 'Senira Vinwath | Software Engineer & UI Designer',
        secondary: 'Full-Stack Developer from Sri Lanka (Seniya365)'
      },
      services: {
        primary: 'Services Offered by Senira Vinwath (Seniya365)',
        secondary: 'Full-Stack Development, UI/UX Design & Tech Consulting'
      },
      skills: {
        primary: 'Technical Skills & Expertise of Senira Vinwath',
        secondary: 'Proficiency in Java, JavaScript, React, WordPress & Design Tools'
      },
      portfolio: {
        primary: 'Portfolio & Projects by Senira Vinwath (Seniya365)',
        secondary: 'Websites, Applications & Design Work Showcase'
      },
      resume: {
        primary: 'Professional Experience of Senira Vinwath',
        secondary: 'Education, Work History & Leadership Roles'
      },
      testimonials: {
        primary: 'Client Testimonials for Senira Vinwath',
        secondary: 'What Clients Say About Working with Seniya365'
      },
      contact: {
        primary: 'Contact Senira Vinwath (Seniya365)',
        secondary: 'Get in Touch for Project Inquiries & Collaborations'
      }
    };
    
    return headings[section] || headings.home;
  };
  
  /**
   * Generate breadcrumb data for structured data
   * @param {string} section - The current active section
   * @returns {Object} - Breadcrumb schema object
   */
  export const getBreadcrumbSchema = (section) => {
    if (!section || section === 'home') {
      return null;
    }
    
    // Format the section name for display
    const formatSectionName = (s) => {
      return s.charAt(0).toUpperCase() + s.slice(1);
    };
    
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://seniya365.me/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": formatSectionName(section),
          "item": `https://seniya365.me/#${section}`
        }
      ]
    };
  };
  
  /**
   * Get meta description for social media sharing
   * @param {string} section - The current active section
   * @returns {string} - Optimized description for sharing
   */
  export const getSocialDescription = (section) => {
    const descriptions = {
      home: "Check out Senira Vinwath's (Seniya365) portfolio - Software Engineer & UI Designer from Sri Lanka specializing in full-stack development and creative design.",
      services: "Explore services offered by Senira Vinwath (Seniya365) including full-stack development, UI/UX design, and startup tech consulting.",
      skills: "Discover Senira Vinwath's technical skills in Java, JavaScript, React, WordPress, Python, and design tools like Figma and Photoshop.",
      portfolio: "Browse through Senira Vinwath's (Seniya365) portfolio of websites, apps, and design work including projects like Ceyltra and Trip Ceylon.",
      resume: "View Senira Vinwath's professional experience as CTO at Ceyltra and education at University of Westminster.",
      testimonials: "Read what clients and colleagues say about working with Senira Vinwath (Seniya365) on development and design projects.",
      contact: "Get in touch with Senira Vinwath (Seniya365) for your next web development, app or design project. Available for freelance work."
    };
    
    return descriptions[section] || descriptions.home;
  };