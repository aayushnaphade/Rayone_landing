import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "Rayone: Hosted LLM APIs for Developers – Mistral, LLaMA, Gemma",
    description = "Fast, scalable APIs for open-source LLMs like Mistral, LLaMA, and Gemma. No GPU setup required. Built for developers, startups, and AI teams.",
    keywords = "LLM API, Open Source AI, Mistral API, LLaMA API, Gemma API, AI hosting, Developer API, No GPU required, Scalable AI, Generative AI",
    image = "https://rayoneai.com/assets/og-image.png",
    url = "https://rayoneai.com",
    type = "website",
    author = "Rayone Team",
    publishedTime,
    modifiedTime,
    article = false,
    noindex = false,
    canonical
}) => {
    const siteTitle = "Rayone";
    const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;
    const canonicalUrl = canonical || url;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <link rel="canonical" href={canonicalUrl} />
            
            {/* Robots Meta */}
            {noindex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            )}
            
            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:image:alt" content={title} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:image:alt" content={title} />
            <meta name="twitter:site" content="@RayoneAI" />
            <meta name="twitter:creator" content="@RayoneAI" />

            {/* Article specific meta tags */}
            {article && publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {article && modifiedTime && (
                <meta property="article:modified_time" content={modifiedTime} />
            )}
            {article && (
                <>
                    <meta property="article:section" content="Technology" />
                    <meta property="article:tag" content="AI" />
                    <meta property="article:tag" content="Machine Learning" />
                    <meta property="article:tag" content="LLM" />
                    <meta property="article:tag" content="API" />
                </>
            )}

            {/* Additional SEO Meta Tags */}
            <meta name="format-detection" content="telephone=no" />
            <meta name="revisit-after" content="1 day" />
            <meta name="language" content="English" />
            <meta name="distribution" content="global" />
            <meta name="rating" content="general" />
            
            {/* Technical Meta Tags */}
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content={siteTitle} />
            
            {/* Preconnect for performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        </Helmet>
    );
};

export default SEO;