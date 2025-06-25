import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { blogs } from '../data/blogData';
import LoadingSpinner from '../components/LoadingSpinner';

const BlogPost = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay for better UX
        setTimeout(() => {
            const blogId = parseInt(id);
            const foundBlog = blogs.find(b => b.id === blogId);
            setBlog(foundBlog);
            setLoading(false);

            // Update document title and meta description
            if (foundBlog) {
                document.title = `${foundBlog.title} - Rayone`;
                
                // Update meta description
                const metaDescription = document.querySelector('meta[name="description"]');
                if (metaDescription) {
                    metaDescription.setAttribute('content', foundBlog.excerpt);
                }
            }
        }, 300);
    }, [id]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!blog) {
        return <Navigate to="/" replace />;
    }

    return (
        <main>
            <section className="blog-post-section">
                <div className="container blog-post-container">
                    <Link to="/blogs" className="back-to-blogs">
                        <i className="fas fa-arrow-left"></i>
                        Back to All Blogs
                    </Link>
                    
                    <div className="blog-post-header">
                        <h1 className="blog-post-title">{blog.title}</h1>
                        <div className="blog-post-meta">
                            <span className="blog-post-date">{blog.date}</span>
                            <div className="blog-post-author">
                                <img src={blog.authorImg} alt={blog.author} />
                                <a 
                                    href={blog.authorLinkedIn || '#'} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    title="View LinkedIn Profile"
                                >
                                    {blog.author}
                                    <i className="fab fa-linkedin" style={{ fontSize: '0.9rem', color: '#0077b5', marginLeft: '8px' }}></i>
                                </a>
                            </div>
                        </div>
                        <img src={blog.img} alt={blog.title} className="blog-post-img" />
                    </div>
                    <div 
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </div>
            </section>
        </main>
    );
};

export default BlogPost;