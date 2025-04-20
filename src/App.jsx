import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import SEO from './components/SEO' // Import the new SEO component
import GoogleAnalytics from './components/GoogleAnalytics' // Import Google Analytics component
import StructuredData from './components/StructuredData' // Import Schema markup component

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Function to determine which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SEO configurations for different sections
  const seoConfig = {
    home: {
      title: "Senira Vinwath | Full-Stack Developer & UI Designer",
      description: "Official portfolio of Senira Vinwath (Seniya365) - Software Engineer specializing in React, Java, and WordPress development from Sri Lanka.",
      keywords: "Senira Vinwath, Seniya365, seniya_365, Full-Stack Developer, UI Designer, Sri Lanka"
    },
    services: {
      title: "Services | Full-Stack Development & UI/UX Design",
      description: "Explore the services offered by Senira Vinwath (Seniya365) including Full-Stack Development, UI/UX Design, and Startup Tech Consulting.",
      keywords: "Senira Vinwath services, Seniya365 services, Full-Stack Development, UI/UX Design, Tech Consulting"
    },
    skills: {
      title: "Skills & Expertise | Senira Vinwath",
      description: "Discover Senira Vinwath's (Seniya365) technical skills in Java, JavaScript, React, WordPress, Python, and design tools like Figma and Photoshop.",
      keywords: "Senira Vinwath skills, Seniya365 expertise, React, Java, WordPress, Python, UI/UX Design"
    },
    portfolio: {
      title: "Portfolio & Projects | Senira Vinwath",
      description: "View Senira Vinwath's (Seniya365) portfolio of web development, app development, and design projects including Ceyltra, Trip Ceylon, and more.",
      keywords: "Senira Vinwath portfolio, Seniya365 projects, web development, app development, UI design, branding"
    },
    resume: {
      title: "Resume & Experience | Senira Vinwath",
      description: "Learn about Senira Vinwath's (Seniya365) education, work experience as CTO at Ceyltra, and professional journey in tech and design.",
      keywords: "Senira Vinwath resume, Seniya365 experience, Ceyltra CTO, education, work history"
    },
    testimonials: {
      title: "Client Testimonials | Senira Vinwath",
      description: "Read what clients and colleagues say about working with Senira Vinwath (Seniya365) on web development and design projects.",
      keywords: "Senira Vinwath testimonials, Seniya365 reviews, client feedback, recommendations"
    },
    contact: {
      title: "Contact Senira Vinwath | Hire Me",
      description: "Get in touch with Senira Vinwath (Seniya365) for web development, UI/UX design, and tech consulting services. Available for freelance work.",
      keywords: "Contact Senira Vinwath, hire Seniya365, freelance developer, UI designer contact, Sri Lanka developer"
    }
  };

  return (
    <main className="main">
      <SEO 
        title={seoConfig[activeSection]?.title}
        description={seoConfig[activeSection]?.description}
        keywords={seoConfig[activeSection]?.keywords}
        section={activeSection}
      />
      <GoogleAnalytics />
      <StructuredData activeSection={activeSection} />
      <Header />
      <Home id="home" />
      <Services id="services" />
      <Skills id="skills" />
      <Portfolio id="portfolio" />
      <Resume id="resume" />
      <Testimonials id="testimonials" />
      <Contact id="contact" />
      <Footer />
    </main>
  )
}

export default App