import React from 'react';
import profileImg from '../../assets/profile-img3.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';

// Import floating image assets
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import './home.css';
import FloatingImages from '../floating-images/FloatingImages';
import JobTitleAnimator from '../job-title-animator/JobTitleAnimator';
import CV from '../../assets/Senira_Vinwath_CV.pdf';

export const Home = () => {
  // Array of images for the FloatingImages component
  const floatingImages = [img1, img2, img3, img4, img5, img6];
  
  return (
    <section className='home' id='home'>
      {/* Floating Images Component */}
      <FloatingImages images={floatingImages} />
      
      <div className="home__container container">
        <div className="home__content">
          <p className="home__subtitle text-cs">
            Hello, <span>My Name Is</span>
          </p>
          
          <h1 className='home__title text-cs'>
            <span>Seniya</span> 365
          </h1>
          
          <p className="home__job">
            <span className="text-cs" style={{ color: 'var(--primary-color)' }}>I am</span> <JobTitleAnimator />
          </p>
          
          <p className="home__text">
          Hey, I'm from Sri Lanka. I love creating digital stuff, whether it's websites, apps, or cool designs. I'm always up for a good chat about ideas, projects, or anything creative. Let's build something awesome together !
          </p>
          
          <div className='home__socials'>
            <a href="https://www.linkedin.com/in/senira-vinwath-0732392b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="home__social-link">
              <BsLinkedin/>
            </a>
            <a href="https://github.com/SeniraVinwath" className="home__social-link">
              <FaGithub/>
            </a>
            <a href="https://www.instagram.com/seniya_365?igsh=cGJreWpsc2Zsem5q" className="home__social-link">
              <AiFillInstagram/>
            </a>
          </div>
          
          <div className="home__btns">
            <a download='' href={CV} className="btn text-cs">Download CV</a>
            
            <a href="#skills" className="hero__link text-cs">My Skills</a>
          </div>
        </div>
        
        <div className="home__img-wrapper">
          <div className="home__banner">
            <img src={profileImg} alt="" className='home__profile'/>
          </div>
          
          <p className="home__data home__data-one">
            <span className="text-lg">
              10 <b>+</b>
            </span>
            
            <span className="text-sm text-cs">
              Projects <span>Completed</span>
            </span>
          </p>
          
          <p className="home__data home__data-two">
            <span className="text-lg">
              800
            </span>
            
            <span className="text-sm text-cs">
              Hours of <span>Coding</span>
            </span>
          </p>
          
          <img src={shapeOne} alt="" className="shape shape__1" />
          {/* <img src={shapeOne} alt="" className="shape shape__2" /> */}
          <img src={shapeTwo} alt="" className="shape shape__3" />
        </div>
      </div>
    </section>
  )
};

export default Home;