import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isBlogsPage = location.pathname === '/blogs';
    const isBlogPost = location.pathname.startsWith('/blogs/');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const getBlogsLink = () => {
        if (isHomePage) {
            return (
                <button 
                    onClick={() => scrollToSection('blog')}
                    style={{ 
                        background: 'none', 
                        border: 'none', 
                        color: 'var(--text-secondary)',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: 'inherit',
                        fontFamily: 'inherit',
                        transition: 'color 0.3s ease'
                    }}
                >
                    Blogs
                </button>
            );
        } else if (isBlogsPage) {
            return <Link to="/">Home</Link>;
        } else if (isBlogPost) {
            return <Link to="/blogs">All Blogs</Link>;
        } else {
            return <Link to="/blogs">Blogs</Link>;
        }
    };

    return (
        <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="logo-container">
                    <Link to="/" className="logo-link">   
                        <img src="/assets/rayone-logo.png" alt="Rayone Logo" />   
                        <span>Rayone</span>
                    </Link>
                </div>
                <nav className="main-nav" id="main-nav">
                    {getBlogsLink()}
                    <a href="https://github.com/RayOneAi" target="_blank" rel="noopener noreferrer" className="github-nav-link">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;