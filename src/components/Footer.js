import React from 'react';

const Footer = () => {
    const scrollToHero = () => {
        const heroSection = document.getElementById('hero-section');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer>
            <div className="container">
                <section className="cta-section" id="footer-cta">
                    <div className="container">
                        <h2>Try it now → rayone.com</h2>
                        <p>No setup. No GPUs. Just APIs.</p>                    
                        <button 
                            className="primary-button"
                            onClick={scrollToHero}
                        >
                            Try for Free
                        </button>
                    </div>
                </section>
                <div className="footer-bottom">
                    <p>© 2025 RayoneAI All rights reserved.</p>
                    <div className="footer-contact">
                        <a href="mailto:contact@rayoneai.com" style={{color:'#000000', textDecoration:'none'}}>
                            Contact Us: contact@rayoneai.com
                        </a>
                    </div>
                    <div className="social-icons">
                        <p>Follow us on:</p>
                        <a href="https://www.producthunt.com/products/rayone" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-product-hunt"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/rayoneai/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/RayOneAi" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;