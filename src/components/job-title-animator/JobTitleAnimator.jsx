import React, { useState, useEffect } from 'react';
import './jobTitleAnimator.css';

const JobTitleAnimator = () => {
  const titles = [
    "Web Developer",
    "Co-founder & CTO at",
    "Computer Science Undergraduate", 
    "Frontend Developer", 
    "UI/UX Designer", 
    "Native App Developer", 
    "Graphic Designer", 
    "React Developer",
    "Java Developer",
    "Python Developer"
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out animation
      setIsAnimating(true);
      
      // After fade out is complete, change the text and start fade in
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsAnimating(false);
      }, 500); // Half of our total animation time for fade out
    }, 4000); // Change every 4 seconds
    
    return () => clearInterval(interval);
  }, [titles.length]); // Added titles.length to the dependency array
  
  // Special case formatting for certain titles
  const formatTitle = (title) => {
    if (title === "Co-founder & CTO at") {
      return (
        <>
          <b>Co-founder & CTO at</b> <i>CEYLTRA</i>
        </>
      );
    } else {
      return <b>{title}</b>;
    }
  };
  
  return (
    <span className={`job-title ${isAnimating ? 'fade-out' : 'fade-in'}`}>
      {formatTitle(titles[currentTitleIndex])}
    </span>
  );
};

export default JobTitleAnimator;