import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <p className="footer__copyright text-cs">MAKING <span>IDEAS</span> REAL, ONE PIXEL AT A TIME</p>
            
            <div className='footer__socials'>
                <a href="https://www.linkedin.com/in/senira-vinwath-0732392b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="footer__social-link">
                    <BsLinkedin/>
                </a>
                <a href="https://github.com/SeniraVinwath" target="_blank" rel="noreferrer" className="footer__social-link">
                    <FaGithub/>
                </a>
                <a href="https://www.instagram.com/seniya_365?igsh=cGJreWpsc2Zsem5q" target="_blank" rel="noreferrer" className="footer__social-link">
                    <AiFillInstagram/>
                </a>
            </div>
            
            <p className="footer__copyright text-cs">CREATED WITH PASSION BY <span>SENIRA VINWATH</span></p>
        </div>
    </footer>
  )
}

export default Footer