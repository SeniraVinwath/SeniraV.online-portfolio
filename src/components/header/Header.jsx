// Header.jsx
import React, { useEffect, useState } from 'react';
import { links } from '../../Data';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsSun, BsMoon } from 'react-icons/bs';
import './header.css'
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(() => {
        // Get saved theme from localStorage or default to 'light-theme'
        return localStorage.getItem('theme') || 'light-theme';
    });
    
    const scrollTop = () => {
        animateScroll.scrollToTop();
    }
    
    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu);
    }, [showMenu]);

    // Add scroll event listener to change header background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSetActive = (to) => {
        setActiveLink(to);
    }

    // Toggle theme function
    const toggleTheme = () => {
        const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Save to localStorage
    }

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme])

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <nav className="nav">
                <Link to='/' onClick={scrollTop} className="nav__logo text-cs">Senira Vinwath</Link>
                
                <div className={`${showMenu ? 'nav__menu show__menu' : 'nav__menu'}`}>
                    <div className="nav__data">
                        <ul className="nav__list">
                            {links.map(({name, path}, index) => {
                                return (
                                    <li className="nav__item" key={index}>
                                        <Link
                                            className={`nav__link text-cs ${activeLink === path ? 'active' : ''}`}
                                            to={path}
                                            spy={true}
                                            hashSpy={true}
                                            smooth={true}
                                            offset={150}
                                            duration={500}
                                            onClick={() => setShowMenu(!showMenu)}
                                            onSetActive={handleSetActive}
                                            activeClass="active"
                                        >
                                            {name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        
                        <div className='header__socials'>
                            <a href="https://www.linkedin.com/in/senira-vinwath-0732392b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="header__social-link">
                                <BsLinkedin/>
                            </a>
                            <a href="https://github.com/SeniraVinwath" target="_blank" rel="noreferrer" className="header__social-link">
                                <FaGithub/>
                            </a>
                            <a href="https://www.instagram.com/seniya_365?igsh=cGJreWpsc2Zsem5q" target="_blank" rel="noreferrer" className="header__social-link">
                                <AiFillInstagram/>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="nav__btns">
                    <div className="theme__toggler" onClick={toggleTheme}>
                        {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                    </div>
                    
                    <div className={`${showMenu? 'nav__toggle animate-toggle' : 'nav__toggle'}`} onClick={() => setShowMenu(!showMenu)}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header