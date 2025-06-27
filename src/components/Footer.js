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
                    <div className="footer-info">
                        <span>© 2025 RayoneAI All rights reserved.</span>
                        <span className="footer-separator">•</span>
                        <a href="mailto:contact@rayoneai.com" className="footer-contact-link">
                            Contact Us: contact@rayoneai.com
                        </a>
                    </div>
                    
                    <div className="footer-connect">
                        <span className="connect-label">Connect with us:</span>
                        <div className="connect-buttons">
                            <a 
                                href="https://chat.whatsapp.com/FVTPA6jy2DJBn1QKBKg3Bm" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="connect-btn whatsapp-btn"
                            >
                                <i className="fab fa-whatsapp"></i>
                                <span>WhatsApp</span>
                            </a>
                            <a 
                                href="https://www.linkedin.com/company/rayoneai/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="connect-btn linkedin-btn"
                            >
                                <i className="fab fa-linkedin"></i>
                                <span>LinkedIn</span>
                            </a>
                            <a 
                                href="https://www.producthunt.com/products/rayone" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="connect-btn producthunt-btn"
                            >
                                <i className="fab fa-product-hunt"></i>
                                <span>Product Hunt</span>
                            </a>
                            <a 
                                href="https://github.com/RayOneAi" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="connect-btn github-btn"
                            >
                                <i className="fab fa-github"></i>
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;