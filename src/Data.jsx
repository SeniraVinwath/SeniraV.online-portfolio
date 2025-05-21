import Project1 from './assets/project1.jpeg';
import Project2 from './assets/project2.jpg';
import Project3 from './assets/project3.jpg';
import Project4 from './assets/project4.jpeg';
import Project5 from './assets/project5.jpg';
import Project6 from './assets/project6.jpg';
import Project7 from './assets/project7.jpg';
import Project8 from './assets/project8.jpg';
import Project9 from './assets/project9.jpg';
import Project10 from './assets/project10.jpg';
import Project11 from './assets/project11.jpg';
import Project12 from './assets/project12.jpg';
import Project13 from './assets/project13.jpg';
import Project14 from './assets/project14.jpg';
import Project15 from './assets/project15.jpg';
import Project16 from './assets/project16.jpg';
import Project18 from './assets/project18.jpg';
import Project17 from './assets/project17.jpg';
import Project19 from './assets/project19.jpg';

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'What I Do',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Projects',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Testimonials',
    path: 'testimonial',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Full-Stack Development',
    title: 'Web & App Solutions',
    description:
      'Building responsive websites and apps with solid backend logic and smooth user interfaces tailored to client needs.',
  },
  {
    id: 2,
    name: 'UI/UX Design',
    title: 'User Centered Design',
    description:
      'Designing intuitive and modern interfaces with a strong focus on usability, aesthetics, and overall user experience.',
  },
  {
    id: 3,
    name: 'Startup Tech Consulting',
    title: 'Product & Tech Consulting',
    description:
      'Helping startups shape and launch their tech ideas from planning and prototyping to building scalable solutions.',
  },
  {
    id: 4,
    name: 'Creative Design',
    title: 'Visual Branding & Media',
    description:
      'Crafting engaging visuals, brand identities, and marketing content with a creative edge and fast, efficient workflows.',
  },
  {
    id: 5,
    name: 'Project & Team Leadership',
    title: 'Tech Project Management',
    description:
      'Leading development teams and managing projects from concept to launch, ensuring quality, clarity, and collaboration.',
  },
];

export const skills = [
  {
    id: 1,
    name: 'Java',
    percentage: 85,
    description:
      'Experienced in object oriented programming and backend development using Java and Spring Boot in projects.',
  },
  {
    id: 2,
    name: 'JavaScript',
    percentage: 80,
    description:
      'Skilled in creating interactive frontend components and dynamic interfaces using vanilla JS and frameworks.',
  },
  {
    id: 3,
    name: 'WordPress',
    percentage: 90,
    description:
      'Built and customized content driven websites for startups and clients using PHP and WordPress CMS.',
  },
  {
    id: 4,
    name: 'Python',
    percentage: 80,
    description:
      'Utilized in scripting, data handling, and building tools like finance apps and games with Tkinter.',
  },
  {
    id: 5,
    name: 'React / React Native',
    percentage: 75,
    description:
      'Developed modern UI components for apps and academic projects with a focus on usability and reactivity.',
  },
  {
    id: 6,
    name: 'Figma',
    percentage: 80,
    description:
      'Designed clean and user friendly web/mobile layouts, wireframes, and prototypes to support UI/UX development.',
  },
  {
    id: 7,
    name: 'Photoshop',
    percentage: 85,
    description:
      'Created digital designs, marketing materials, and enhanced visuals for branding and entertainment campaigns.',
  },
  {
    id: 8,
    name: 'MySQL',
    percentage: 80,
    description:
      'Designed and managed relational databases for full-stack applications with solid query-building experience.',
  },
  {
    id: 9,
    name: 'Git & GitHub',
    percentage: 90,
    description:
      'Proficient in version control, managing repositories, and collaborating on code across teams and solo projects.',
  },
];

export const projects = [
  // 💻 Web & App Projects – High Priority
  {
    id: 1,
    img: Project1,
    category: 'Web',
    title: 'Ceyltra Website',
    description:
      'Designed and developed the official Ceyltra website using WordPress, PHP, and MySQL. Integrated booking systems, search filters, and dynamic service listings. Ensured responsive UX and SEO optimization for travel and property services.',
  },
  {
    id: 2,
    img: Project4,
    category: 'App',
    title: 'Trip Ceylon – SDGP Project',
    description:
      'Led the frontend and backend for Trip Ceylon, a comprehensive travel companion app. Buit with React Native (frontend), Node.js + Supabase (backend), Python (itinerary generator). Features include itinerary builder, luggage tracking & social connections.',
  },
  {
  id: 3,
  img: Project18,
  category: 'Software',
  title: 'Cancer Prediction ML System',
  description:
    'Built classification and regression models to predict cancer mortality and survival. Applied Naïve Bayes, Logistic Regression, KNN, and Decision Trees with stratified training. Achieved 80% recall for critical mortality cases.',
  },
  {
  id: 4,
  img: Project19,
  category: 'Software',
  title: 'Bookstore RESTful API',
  description:
    'Developed a RESTful API for a bookstore using Java, JAX-RS, and JSON. Implemented CRUD operations, custom exceptions, and HTTP status handling. Thoroughly tested endpoints via Postman for reliability.',
  },
  {
    id: 5,
    img: Project3,
    category: 'Web',
    title: 'Cozy Villa Website',
    description:
      'Built a clean, content focused website for Cozy Villa using WordPress and Elementor. Customized layout and booking sections for a luxury homestay experience. Designed for easy updates by non technical owners.',
  },
  {
    id: 6,
    img: Project2,
    category: 'Software',
    title: 'Event Ticketing Simulator',
    description:
      'Developed a real time ticketing simulator using Java, Spring Boot (backend), React (frontend), and MySQL. Included role based access (admin/user), ticket validation logic, and responsive admin panels.',
  },
  {
  id: 7,
  img: Project17,
  category: 'Software',
  title: 'Max Flow Network Solver',
  description:
    'Implemented Edmonds-Karp algorithm using adjacency lists and BFS to compute max flow. Optimized for sparse graphs, achieving O(VE²) time complexity and 1.13ms runtime on benchmark tests.',
  },
  {
    id: 8,
    img: Project5,
    category: 'Software',
    title: 'Student Management System',
    description:
      'Created a Java-based student management system that uses sorting algorithms and GUI elements to manage academic data. Emphasized efficient data access and clear structure.',
  },
  {
    id: 9,
    img: Project6,
    category: 'Software',
    title: 'Personal Finance Tracker',
    description:
      'Built a desktop finance management app using Python and Tkinter. Included income/expense tracking, monthly summaries, and local storage support. Designed for personal use with minimal clutter.',
  },
  {
    id: 10,
    img: Project7,
    category: 'Web',
    title: 'Aquatic Website (SDG Themed)',
    description:
      'Designed a themed educational website to raise awareness about Sustainable Development Goal 14 (Life Below Water). Tech stack: HTML, CSS, JavaScript. Featured animations and structured info cards.',
  },
  {
    id: 11,
    img: Project8,
    category: 'Software',
    title: 'Color Guessing Game',
    description:
      'Developed a simple logic game using Python where users guess RGB colors. Used for algorithm testing and playful learning of Python basics.',
  },

  // 🔥 Branding Projects
  {
    id: 12,
    img: Project9,
    category: 'Branding',
    title: 'Ceyltra Visual Identity',
    description:
      'I handled the complete branding for Ceyltra, designing the logo, banners, and all social media content. This included consistent brand color themes, modern typography, and layout standards. Delivered a visually compelling identity aligned with the travel tech market.',
  },
  {
    id: 13,
    img: Project10, // Replace with a preview image if available
    category: 'Branding',
    title: 'Auspro Business Solutions',
    description:
      'Currently leading the complete brand and digital presence development for Auspro Business Solutions. This includes brand identity design, website development, and social media assets. The site is being built with WordPress and custom graphics tailored for their business consulting focus.',
  },

  // 🎨 Graphic Design – Ceyltra
  {
    id: 14,
    img: Project11,
    category: 'Graphic',
    title: 'Ceyltra Web Thumbnails',
    description:
      'Created dozens of custom designed thumbnail images for Ceyltra’s main pages and service sections, ensuring consistency with the site’s UI. Used Photoshop and layout tools to produce clean, responsive friendly visuals tailored for mobile and web.',
  },
  {
    id: 15,
    img: Project12,
    category: 'Graphic',
    title: 'Ceyltra Tour Brochure',
    description:
      'Designed a detailed brochure featuring all Ceyltra one day and round tour itineraries. The layout included maps, icons, QR codes, and clear tour breakdowns. Tools used: Photoshop.',
  },
  {
    id: 16,
    img: Project13,
    category: 'Graphic',
    title: 'Ceyltra Tour Leaflets',
    description:
      'Created over 20 unique leaflet designs for each of Ceyltra’s tours. Each leaflet featured key highlights, visual storytelling, and minimalistic layout. Designs optimized for both digital sharing and A4 print.',
  },

  // 🎶 Graphic Design – Spark Entertainment
  {
    id: 17,
    img: Project14,
    category: 'Graphic',
    title: 'Boom Box Band Brochure',
    description:
      'Designed a multi page brochure for Boom Box Band (Sri Lanka) under Spark Entertainment, highlighting the band’s offerings, event packages, and branding. Used layered visuals and themed motifs.',
  },
  {
    id: 18,
    img: Project15,
    category: 'Graphic',
    title: 'Music Video Visual Effects',
    description:
      'Collaborated with Spark Entertainment to design AI enhanced visuals for music video production. Used Kaiber.ai and MidJourney to generate dynamic visuals, then refined using Photoshop for final production.',
  },

  // 🧩 NFT Project
  {
    id: 19,
    img: Project16,
    category: 'Graphic',
    title: 'NFT Collection & Generator',
    description:
      'Created an NFT art collection including layered asset design, batch generation with code, and metadata generation for blockchain minting. Tools: Python for generation, Adobe Photoshop for asset design, and JSON for metadata.',
  },
];

export const cv = [
  // 🎓 Education
  {
    id: 1,
    title: 'BSc (Hons) Computer Science',
    subtitle: 'University of Westminster',
    date: 'Present',
    description:
      'Pursuing a degree in Computer Science with top performance in modules like Software Development, Algorithms, Machine Learning, Client-Server Architectures, and real-world group project experience.',
    category: 'education',
  },
  {
    id: 2,
    title: 'Foundation Certificate in Higher Education',
    subtitle: 'Informatics Institute of Technology',
    date: '2023',
    description:
      'Completed core subjects in software, web development, and computing fundamentals. Built a solid programming foundation and strong problem-solving skills through hands-on assessments and projects.',
    category: 'education',
  },
  {
    id: 3,
    title: 'G.C.E. Ordinary Level (O/L)',
    subtitle: 'Sri Lanka',
    date: '2019',
    description:
      'Achieved A grades in 8 subjects including English, Mathematics, ICT, and Sinhala Literature, demonstrating academic excellence, consistency, and strong overall performance in key areas.',
    category: 'education',
  },

  // 💼 Experience
  {
    id: 4,
    title: 'Co-Founder & CTO',
    subtitle: 'Ceyltra (PVT) LTD.',
    date: 'Present',
    description:
      'Lead all tech operations, UI/UX, and development at Ceyltra. Built the website, created branding, integrated features, and managed product direction for platform success.',
    category: 'experience',
  },
  {
    id: 5,
    title: 'Graphic Designer (Part Time)',
    subtitle: 'Spark Entertainment (PVT) LTD.',
    date: '2021',
    description:
      'Designed visuals for brochures, thumbnails, and videos. Enhanced productivity using AI tools while delivering high-quality, creative output for entertainment campaigns and promotions.',
    category: 'experience',
  },
  {
    id: 6,
    title: 'Tech Lead (Student Project)',
    subtitle: 'Trip Ceylon (University Project)',
    date: '2025',
    description:
      'Led development of a travel app using React Native, Node.js, Python, and Supabase. Focused on frontend/backend logic, itinerary generation, UI/UX, and team coordination.',
    category: 'experience',
  },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Rajesh Chathuranga',
    author: 'Owner & MD of Cozy Hotels',
    description:
      'Senira is the most talented and capable individual I have ever met in my life. He is a genuinely good person, a high quality, skilled, and exceptional professional. Simply put, he is the real deal. Senira is an outstanding figure in the IT industry, someone I truly admire. I wholeheartedly wish him all the best for the future, to go far, achieve great things, and continue growing. Above all, he is an honest and sincere individual.',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Nipuna Chinthaka',
    author: 'MD, CEYLTRA (PVT) LTD',
    description:
      'Senira is a talented and reliable web developer with great creativity, dedication, and teamwork. An asset to any digital project.',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Navodya Gunasekara',
    author: 'Leader, Band Boom Box',
    description:
      'Senira’s been a huge support with our brochures, graphics, and web work. Super easy to work with, creative, punctual, and always delivers more than expected. He just gets the brief instantly and brings it to life with style. What I really appreciate is how reliable and consistent he is. No back and forth, no delays, just clean, solid work every time. Wishing him nothing but the best!',
  },
];

