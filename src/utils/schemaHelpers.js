/**
 * Schema.org helpers for SEO
 * These functions generate structured data to improve search engine visibility
 */

// Base info about Senira Vinwath
const basePersonInfo = {
    "@type": "Person",
    "name": "Senira Vinwath",
    "alternateName": ["Seniya365", "seniya_365", "Seniya"],
    "url": "https://seniya365.me",
    "jobTitle": "Software Engineer & UI Designer",
    "email": "chandumendis05@gmail.com",
    "telephone": "+94 78 157 4975",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Boossa",
      "addressCountry": "Sri Lanka"
    }
  };
  
  /**
   * Generate full Person schema markup for Senira Vinwath
   * @returns {Object} Schema.org Person object
   */
  export const getPersonSchema = () => {
    return {
      "@context": "https://schema.org",
      ...basePersonInfo,
      "image": "https://seniya365.me/assets/profile-img3-DoO5Ljkz.png",
      "worksFor": {
        "@type": "Organization",
        "name": "Ceyltra (PVT) LTD."
      },
      "sameAs": [
        "https://github.com/SeniraVinwath",
        "https://www.linkedin.com/in/senira-vinwath-0732392b7",
        "https://www.instagram.com/seniya_365"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "University of Westminster"
      },
      "knowsAbout": [
        "Full-stack Development", 
        "UI/UX Design", 
        "React", 
        "Java", 
        "WordPress", 
        "Python", 
        "JavaScript"
      ]
    };
  };
  
  /**
   * Generate WebSite schema markup
   * @returns {Object} Schema.org WebSite object
   */
  export const getWebsiteSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://seniya365.me/",
      "name": "Senira Vinwath | Portfolio",
      "description": "Official portfolio of Senira Vinwath (Seniya365) - Software Engineer, Full-stack Developer, UI/UX Designer",
      "author": {
        "@type": "Person",
        "name": "Senira Vinwath"
      },
      "inLanguage": "en-US",
      "copyrightYear": new Date().getFullYear(),
      "dateModified": new Date().toISOString()
    };
  };
  
  /**
   * Generate Professional Service schema for the Services section
   * @returns {Object} Schema.org ProfessionalService object
   */
  export const getServicesSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Senira Vinwath Services",
      "description": "Professional services offered by Senira Vinwath including Full-Stack Development, UI/UX Design, and Startup Tech Consulting.",
      "url": "https://seniya365.me/#services",
      "provider": {
        "@type": "Person",
        "name": "Senira Vinwath"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Full-Stack Development",
          "description": "Building responsive websites and apps with solid backend logic and smooth user interfaces tailored to client needs."
        },
        {
          "@type": "Offer",
          "name": "UI/UX Design",
          "description": "Designing intuitive and modern interfaces with a strong focus on usability, aesthetics, and overall user experience."
        },
        {
          "@type": "Offer",
          "name": "Startup Tech Consulting",
          "description": "Helping startups shape and launch their tech ideas from planning and prototyping to building scalable solutions."
        },
        {
          "@type": "Offer",
          "name": "Creative Design",
          "description": "Crafting engaging visuals, brand identities, and marketing content with a creative edge and fast, efficient workflows."
        },
        {
          "@type": "Offer",
          "name": "Project & Team Leadership",
          "description": "Leading development teams and managing projects from concept to launch, ensuring quality, clarity, and collaboration."
        }
      ],
      "areaServed": "Worldwide",
      "serviceType": ["Web Development", "UI/UX Design", "Tech Consulting", "Brand Design"],
      "priceRange": "$$"
    };
  };
  
  /**
   * Generate schema for Portfolio projects section
   * @returns {Object} Schema.org CreativeWorkSeries object
   */
  export const getPortfolioSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWorkSeries",
      "name": "Senira Vinwath Portfolio",
      "author": {
        "@type": "Person",
        "name": "Senira Vinwath"
      },
      "url": "https://seniya365.me/#portfolio",
      "description": "Portfolio of web development, app development, and design projects by Senira Vinwath (Seniya365).",
      "keywords": "portfolio, Senira Vinwath, Seniya365, web development, app development, UI design",
      "hasPart": [
        {
          "@type": "WebSite",
          "name": "Ceyltra Website",
          "description": "Designed and developed the official Ceyltra website using WordPress, PHP, and MySQL. Integrated booking systems, search filters, and dynamic service listings.",
          "author": {
            "@type": "Person",
            "name": "Senira Vinwath"
          }
        },
        {
          "@type": "MobileApplication",
          "name": "Trip Ceylon – SDGP Project",
          "description": "Led the frontend and backend for Trip Ceylon, a comprehensive travel companion app. Built with React Native (frontend), Node.js + Supabase (backend), Python (itinerary generator).",
          "operatingSystem": "Android, iOS",
          "author": {
            "@type": "Person",
            "name": "Senira Vinwath"
          }
        },
        {
          "@type": "WebSite",
          "name": "Cozy Villa Website",
          "description": "Built a clean, content focused website for Cozy Villa using WordPress and Elementor. Customized layout and booking sections for a luxury homestay experience.",
          "author": {
            "@type": "Person",
            "name": "Senira Vinwath"
          }
        }
      ]
    };
  };
  
  /**
   * Generate schema for Resume/Education section
   * @returns {Object} Schema.org Resume object
   */
  export const getResumeSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Resume",
      "name": "Senira Vinwath Resume",
      "url": "https://seniya365.me/#resume",
      "author": {
        "@type": "Person",
        "name": "Senira Vinwath"
      },
      "description": "Professional resume of Senira Vinwath (Seniya365), Software Engineer and UI Designer, including education, work experience, and skills.",
      "educationRequirements": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "educationalLevel": "Bachelor's Degree",
        "recognizedBy": {
          "@type": "EducationalOrganization",
          "name": "University of Westminster"
        }
      },
      "skills": "Java, JavaScript, React, WordPress, Python, UI/UX Design, Project Management",
      "workExperience": [
        {
          "@type": "OrganizationRole",
          "roleName": "Co-Founder & CTO",
          "worksFor": {
            "@type": "Organization",
            "name": "Ceyltra (PVT) LTD."
          },
          "description": "Lead all tech operations, UI/UX, and development at Ceyltra. Built the website, created branding, integrated features, and managed product direction for platform success."
        },
        {
          "@type": "OrganizationRole",
          "roleName": "Graphic Designer (Part Time)",
          "worksFor": {
            "@type": "Organization",
            "name": "Spark Entertainment (PVT) LTD."
          },
          "description": "Designed visuals for brochures, thumbnails, and videos. Enhanced productivity using AI tools while delivering high-quality, creative output for entertainment campaigns and promotions."
        },
        {
          "@type": "OrganizationRole",
          "roleName": "Tech Lead (Student Project)",
          "worksFor": {
            "@type": "Organization",
            "name": "Trip Ceylon (University Project)"
          },
          "description": "Led development of a travel app using React Native, Node.js, Python, and Supabase. Focused on frontend/backend logic, itinerary generation, UI/UX, and team coordination."
        }
      ]
    };
  };
  
  /**
   * Generate schema for Testimonials section
   * @returns {Object} Schema.org Review object array
   */
  export const getTestimonialsSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Testimonials for Senira Vinwath",
      "url": "https://seniya365.me/#testimonials",
      "description": "Client testimonials and reviews about Senira Vinwath's work as a developer and designer.",
      "itemListElement": [
        {
          "@type": "Review",
          "position": 1,
          "reviewBody": "Senira is the most talented and capable individual I have ever met in my life. He is a genuinely good person, a high quality, skilled, and exceptional professional. Simply put, he is the real deal. Senira is an outstanding figure in the IT industry, someone I truly admire. I wholeheartedly wish him all the best for the future, to go far, achieve great things, and continue growing. Above all, he is an honest and sincere individual.",
          "author": {
            "@type": "Person",
            "name": "Rajesh Chathuranga"
          },
          "itemReviewed": {
            "@type": "Service",
            "name": "Web Development Services",
            "provider": {
              "@type": "Person",
              "name": "Senira Vinwath"
            }
          }
        },
        {
          "@type": "Review",
          "position": 2,
          "reviewBody": "Senira is a talented and reliable web developer with great creativity, dedication, and teamwork. An asset to any digital project.",
          "author": {
            "@type": "Person",
            "name": "Nipuna Chinthaka"
          },
          "itemReviewed": {
            "@type": "Service",
            "name": "Web Development Services",
            "provider": {
              "@type": "Person",
              "name": "Senira Vinwath"
            }
          }
        },
        {
          "@type": "Review",
          "position": 3,
          "reviewBody": "Senira's been a huge support with our brochures, graphics, and web work. Super easy to work with, creative, punctual, and always delivers more than expected. He just gets the brief instantly and brings it to life with style. What I really appreciate is how reliable and consistent he is. No back and forth, no delays, just clean, solid work every time. Wishing him nothing but the best!",
          "author": {
            "@type": "Person",
            "name": "Navodya Gunasekara"
          },
          "itemReviewed": {
            "@type": "Service",
            "name": "Design Services",
            "provider": {
              "@type": "Person",
              "name": "Senira Vinwath"
            }
          }
        }
      ]
    };
  };
  
  /**
   * Generate Contact Page schema
   * @returns {Object} Schema.org ContactPage object
   */
  export const getContactSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Senira Vinwath",
      "url": "https://seniya365.me/#contact",
      "description": "Contact information and form to get in touch with Senira Vinwath (Seniya365) for project inquiries and collaborations.",
      "mainEntity": {
        "@type": "Person",
        ...basePersonInfo,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "chandumendis05@gmail.com",
          "telephone": "+94 78 157 4975"
        }
      }
    };
  };