import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQSchema from '../components/FAQSchema';
import EmailSignupForm from '../components/EmailSignupForm';
import { blogs } from '../data/blogData';

const Home = () => {
    return (
        <>
            <SEO 
                title="Rayone: Run Open-Source LLMs Without GPUs - Instant API Access"
                description="Deploy Mistral, LLaMA, Gemma, and other open-source LLMs instantly with our hosted API service. No GPU setup required. Built for developers, startups, and AI teams."
                keywords="Open Source LLM API, Mistral API hosting, LLaMA API service, Gemma API, No GPU AI hosting, Instant LLM deployment, AI API for developers, Hosted language models, Scalable AI infrastructure, LLM as a Service"
                url="https://rayoneai.com"
                image="https://rayoneai.com/assets/Dashboard_img.png"
            />
            <FAQSchema />
            <main itemScope itemType="https://schema.org/WebPage">
            {/* Hero Section */}
            <section className="hero-section" id="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <div>
                            <a href="https://www.producthunt.com/products/rayone?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-rayone"
                                target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=976494&theme=dark&t=1750136972267"
                                    alt="Rayone - Instant APIs for Open Models | Product Hunt"
                                    style={{ width: '200px', height: '47px' }} 
                                    width="200" 
                                    height="47" 
                                />
                            </a>
                        </div>
                        <h1 itemProp="headline">Run Open-Source LLMs. No GPUs Required.</h1>
                        <p className="subtitle" itemProp="description">
                            Instant API access to Mistral, LLaMA, Gemma, and more — hosted, scalable, and ready to deploy.
                        </p>
                        <div className="cta-buttons">
                            <EmailSignupForm source="hero_waitlist" />
                        </div>
                    </div>
                </div>
            </section>
 {/* Playground Showcase Section */}
            <section className="playground-showcase-section">
                    {/* <h2>Key Features</h2> */}
                
                <div className="container">
                    <div class="playground-border-container
">   <div className="playground-image-container">
                        <img 
                            src="/assets/Dashboard_img.png" 
                            alt="Rayone Dashboard Interface - Manage LLM APIs including Mistral, LLaMA, and Gemma models" 
                            width="1200" 
                            height="800" 
                            loading="eager"
                            itemProp="image"
                        />
                    </div>
                        <div className="image-fade-bottom"></div>

                    </div>


                 
                </div>
            </section>
            {/* Built With Section */}
            <section className="built-with-section">
                <h2 className="built-with-title">Built With</h2>
                <div className="built-with-marquee">
                    <div className="built-with-track">
                        <img src="/assets/cursor-logo.png" alt="Cursor - AI-powered code editor" width="120" height="40" loading="lazy" />
                        <img src="/assets/postman-logo.png" alt="Postman - API development platform" width="120" height="40" loading="lazy" />
                        <img src="/assets/ollama-logo.png" alt="Ollama - Local LLM management tool" style={{ filter: 'invert(1)' }} width="120" height="40" loading="lazy" />
                        <img src="/assets/huggingface-logo.png" alt="Hugging Face - Open source ML platform" width="120" height="40" loading="lazy" />
                        <img src="/assets/langchain-logo.png" alt="LangChain - Framework for LLM applications" width="120" height="40" loading="lazy" />
                        <img src="/assets/mistral-logo.png" alt="Mistral AI - Open source language models" width="120" height="40" loading="lazy" />
                        {/* Repeat for seamless scroll */}
                        <img src="/assets/cursor-logo.png" alt="Cursor - AI-powered code editor" width="120" height="40" loading="lazy" />
                        <img src="/assets/postman-logo.png" alt="Postman - API development platform" width="120" height="40" loading="lazy" />
                        <img src="/assets/ollama-logo.png" alt="Ollama - Local LLM management tool" style={{ filter: 'invert(1)' }} width="120" height="40" loading="lazy" />
                        <img src="/assets/huggingface-logo.png" alt="Hugging Face - Open source ML platform" width="120" height="40" loading="lazy" />
                        <img src="/assets/langchain-logo.png" alt="LangChain - Framework for LLM applications" width="120" height="40" loading="lazy" />
                        <img src="/assets/mistral-logo.png" alt="Mistral AI - Open source language models" width="120" height="40" loading="lazy" />
                    </div>
                    <div className="built-with-fade built-with-fade-left"></div>
                    <div className="built-with-fade built-with-fade-right"></div>
                </div>
            </section>

           

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <h2>Key Features</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="fas fa-server"></i>
                            </div>
                            <div className="feature-content">
                                <h3>Open-Source Model Hosting</h3>
                                <p>Access a vast library of open-source AI models, ready for deployment.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="fas fa-rocket"></i>
                            </div>
                            <div className="feature-content">
                                <h3>Subscription-Based API</h3>
                                <p>Flexible and scalable API access to fit your project's needs and budget.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <div className="feature-content">
                                <h3>Effortless Deployment</h3>
                                <p>Deploy custom models with a single line of code, no complex infrastructure.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="fas fa-cogs"></i>
                            </div>
                            <div className="feature-content">
                                <h3>Fine-Tune with Ease</h3>
                                <p>Tailor models to your specific datasets and achieve superior results.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="fas fa-globe"></i>
                            </div>
                            <div className="feature-content">
                                <h3>Scalable Infrastructure</h3>
                                <p>Our robust backend ensures your models perform reliably at any scale.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="fas fa-headset"></i>
                            </div>
                            <div className="feature-content">
                                <h3>Dedicated Support</h3>
                                <p>Get expert assistance whenever you need it, ensuring smooth operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="workflow-section">
                <div className="container">
                    <h2>How Rayone Works</h2>
                    <div className="workflow-diagram">
                        <div className="workflow-step">
                            <div className="step-icon"><i className="fas fa-cube"></i></div>
                            <h3>Pick Model</h3>
                            <p>Choose from our curated list of OSS models</p>
                        </div>
                        <div className="workflow-step">
                            <div className="step-icon"><i className="fas fa-key"></i></div>
                            <h3>Get API Key</h3>
                            <p>Generate your secure API key</p>
                        </div>
                        <div className="workflow-step">
                            <div className="step-icon"><i className="fas fa-rocket"></i></div>
                            <h3>Deploy</h3>
                            <p>Deploy with a single API call</p>
                        </div>
                        <div className="workflow-step">
                            <div className="step-icon"><i className="fas fa-chart-line"></i></div>
                            <h3>Monitor</h3>
                            <p>Track usage and performance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrations Section */}
            <section className="integrations-section">
                <div className="container">
                    <h2>Plug into your stack in minutes</h2>
                    <div className="integrations-grid">
                       
                        <div className="integration-item">
                            <i className="fab fa-python"></i>
                            <span>Haystack</span>
                        </div>
                        <div className="integration-item">
                            <i className="fab fa-python"></i>
                            <span>FastAPI</span>
                        </div>
                        <div className="integration-item">
                            <i className="fab fa-node-js"></i>
                            <span>Node.js</span>
                        </div>
                        <div className="integration-item">
                            <i className="fab fa-python"></i>
                            <span>Streamlit</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="blog-section" id="blog">
                <div className="container">
                    <h2 className="section-title">Latest Blogs</h2>
                    <div className="blog-grid home-preview">
                        {blogs.slice(0, 4).map(blog => (
                            <div key={blog.id} className="blog-card compact">
                                <Link to={`/blogs/${blog.id}`}>
                                    <img src={blog.img} alt={blog.title} className="blog-img" />
                                </Link>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span className="blog-date">{blog.date}</span>
                                    </div>
                                    <Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none' }}>
                                        <h3 className="blog-post-title">{blog.title}</h3>
                                    </Link>
                                    <p className="blog-excerpt">{blog.excerpt}</p>
                                    <Link 
                                        to={`/blogs/${blog.id}`} 
                                        className="blog-read-more"
                                    >
                                        Read more
                                    </Link>
                                    <div className="blog-author">
                                        <img src={blog.authorImg} alt={blog.author} className="author-img" />
                                        <div>
                                            <a 
                                                href={blog.authorLinkedIn || '#'} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="author-name"
                                                title="View LinkedIn Profile"
                                            >
                                                {blog.author} 
                                                <i className="fab fa-linkedin" style={{ fontSize: '0.8rem', color: '#0077b5', marginLeft: '4px' }}></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {blogs.length > 4 && (
                        <div className="see-all-blogs-container">
                            <Link to="/blogs" className="see-all-blogs-btn">
                                See All Blogs
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    )}
                </div>
            </section>
            </main>
        </>
    );
};

export default Home;