// FloatingImages.jsx - Enhanced Continuous Movement Version
import React, { useEffect, useRef, useState } from 'react';
import './FloatingImages.css';

const FloatingImages = ({ images }) => {
  const floatingImagesRef = useRef([]);
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  
  // Number of duplicates per image for more interesting visual effect
  const duplicatesPerImage = 2;
  
  // Create the duplicated array of images
  const duplicatedImages = [];
  images.forEach(image => {
    for (let i = 0; i <= duplicatesPerImage; i++) {
      duplicatedImages.push(image);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    };

    // Call once to initialize
    handleResize();
    
    // Setup event listener for resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (containerSize.width === 0 || containerSize.height === 0 || !containerRef.current) return;
    
    // Initialize position and movement for each image
    const imageElements = floatingImagesRef.current.filter(el => el !== null);
    
    // Initial setup for each image
    imageElements.forEach((img) => {
      if (!img) return;
      
      // Random size between 40px and 90px for more variety
      const size = Math.floor(Math.random() * 50) + 40;
      img.style.width = `${size}px`;
      img.style.height = `${size}px`;
      
      // Keep the existing opacity range
      img.style.opacity = (0.15 + Math.random() * 0.1).toFixed(2);
      
      // Random initial position (with padding from edges)
      const padding = 60;
      const randomX = padding + Math.random() * (containerSize.width - size - (padding * 2));
      const randomY = padding + Math.random() * (containerSize.height - size - (padding * 2));
      
      img.style.left = `${randomX}px`;
      img.style.top = `${randomY}px`;
      
      // Set a random transform origin for more natural rotation
      const originX = Math.floor(Math.random() * 100);
      const originY = Math.floor(Math.random() * 100);
      img.style.transformOrigin = `${originX}% ${originY}%`;
      
      // Add animation class - one of 6 different animations
      const animationClass = `floating-animation-${Math.floor(Math.random() * 6) + 1}`;
      img.classList.add(animationClass);
      
      // Slightly faster animation duration (35-70 seconds)
      const animDuration = Math.floor(Math.random() * 35) + 35;
      img.style.animationDuration = `${animDuration}s`;
      
      // Random animation delay for less synchronization
      const animDelay = Math.floor(Math.random() * 15);
      img.style.animationDelay = `-${animDelay}s`;
      
      // Initial rotation
      const rotation = Math.random() * 360;
      img.style.transform = `rotate(${rotation}deg)`;
      
      // Store movement vectors for continuous animation (slightly faster)
      img.dataset.speedX = (Math.random() * 1.0 - 0.5).toFixed(2); // -0.5 to 0.5
      img.dataset.speedY = (Math.random() * 1.0 - 0.5).toFixed(2); // -0.5 to 0.5
      img.dataset.rotateSpeed = (Math.random() * 0.25 - 0.125).toFixed(2); // -0.125 to 0.125
    });
    
    // Continuous movement animation for fish-like behavior
    const animateContinuousMovement = () => {
      imageElements.forEach((img) => {
        if (!img) return;
        
        // Get current position and speeds
        const left = parseFloat(img.style.left);
        const top = parseFloat(img.style.top);
        let speedX = parseFloat(img.dataset.speedX);
        let speedY = parseFloat(img.dataset.speedY);
        let rotateSpeed = parseFloat(img.dataset.rotateSpeed);
        const currentRotation = parseFloat(img.style.transform.replace(/[^\d.-]/g, '')) || 0;
        
        // Add slight randomization for more natural movement
        speedX += (Math.random() * 0.1) - 0.05;
        speedY += (Math.random() * 0.1) - 0.05;
        
        // Calculate new position
        let newX = left + speedX;
        let newY = top + speedY;
        
        // Get image dimensions
        const imgWidth = parseFloat(img.style.width) || 50;
        const imgHeight = parseFloat(img.style.height) || 50;
        
        // Boundary check with bounce effect
        const padding = 20;
        if (newX < padding || newX > containerSize.width - imgWidth - padding) {
          // Reverse direction on hitting boundary
          speedX = -speedX;
          img.dataset.speedX = speedX.toFixed(2);
          newX = left + speedX;
          
          // Change rotation direction slightly
          rotateSpeed = -rotateSpeed + (Math.random() * 0.06 - 0.03);
          img.dataset.rotateSpeed = rotateSpeed.toFixed(2);
        }
        
        if (newY < padding || newY > containerSize.height - imgHeight - padding) {
          // Reverse direction on hitting boundary
          speedY = -speedY;
          img.dataset.speedY = speedY.toFixed(2);
          newY = top + speedY;
          
          // Change rotation direction slightly
          rotateSpeed = -rotateSpeed + (Math.random() * 0.06 - 0.03);
          img.dataset.rotateSpeed = rotateSpeed.toFixed(2);
        }
        
        // Apply new position
        img.style.left = `${newX}px`;
        img.style.top = `${newY}px`;
        
        // Apply rotation - mimicking fish turning when they change direction
        const newRotation = currentRotation + rotateSpeed;
        img.style.transform = `rotate(${newRotation}deg)`;
        
        // Very subtle opacity pulsing
        const currentOpacity = parseFloat(img.style.opacity) || 0.2;
        const opacityChange = (Math.random() * 0.01) - 0.005; // Subtle -0.005 to 0.005
        const newOpacity = Math.max(0.15, Math.min(0.25, currentOpacity + opacityChange));
        img.style.opacity = newOpacity.toFixed(2);
        
        // Occasionally change speed to create more organic movement
        if (Math.random() < 0.01) { // 1% chance per frame
          const speedChange = (Math.random() * 0.1) - 0.05;
          speedX += speedChange;
          speedY += speedChange;
          img.dataset.speedX = speedX.toFixed(2);
          img.dataset.speedY = speedY.toFixed(2);
        }
      });
      
      // Continue animation loop - use 60fps for smooth movement
      animationFrameRef.current = requestAnimationFrame(animateContinuousMovement);
    };
    
    // Start the continuous animation
    animationFrameRef.current = requestAnimationFrame(animateContinuousMovement);
    
    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [containerSize]);

  return (
    <div className="floating-images-container" ref={containerRef}>
      {duplicatedImages.map((image, idx) => (
        <img
          key={idx}
          src={image}
          alt={`Floating element ${idx + 1}`}
          className="floating-image"
          ref={(el) => (floatingImagesRef.current[idx] = el)}
        />
      ))}
    </div>
  );
};

export default FloatingImages;