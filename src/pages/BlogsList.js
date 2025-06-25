import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogs } from '../data/blogData';

const BlogsList = () => {

    return (
        <>
            <SEO 
                title="AI & LLM Blog - Rayone"
                description="Explore our comprehensive blog covering AI development, LLM hosting, open-source models, API tutorials, and the latest in machine learning technology."
                keywords="AI blog, LLM tutorials, Machine learning, Open source AI, Mistral guides, LLaMA tutorials, API development, AI hosting"
                url="https://rayoneai.com/blogs"
                type="website"
            />
            <main>
            <section className="blogs-list-section">
                <div className="container">
                    <div className="blogs-list-header">
                        <Link to="/" className="back-to-home">
                            <i className="fas fa-arrow-left"></i>
                            Back to Home
                        </Link>
                        <h1 className="blogs-list-title">All Blog Posts</h1>
                        <p className="blogs-list-subtitle">
                            Discover insights about AI, technology, and the future of development
                        </p>
                    </div>
                    
                    <div className="blog-grid blogs-page-grid">
                        {blogs.map(blog => (
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
                </div>
            </section>
        </main>
        </>
    );
};

export default BlogsList;