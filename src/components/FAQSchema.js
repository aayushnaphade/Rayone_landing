import React from 'react';
import { Helmet } from 'react-helmet-async';

const FAQSchema = () => {
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is Rayone?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rayone is a hosted API service that provides instant access to open-source Large Language Models like Mistral, LLaMA, and Gemma without requiring GPU setup. It's built for developers, startups, and AI teams who need scalable AI infrastructure."
                }
            },
            {
                "@type": "Question", 
                "name": "Do I need my own GPUs to use Rayone?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, you don't need any GPUs. Rayone handles all the infrastructure, hosting, and scaling for you. Simply use our API endpoints to access powerful language models instantly."
                }
            },
            {
                "@type": "Question",
                "name": "Which language models are supported?",
                "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Rayone supports various open-source LLMs including Mistral, LLaMA, Gemma, and many more. We continuously add new models based on community demand and technological advancements."
                }
            },
            {
                "@type": "Question",
                "name": "How do I get started with Rayone?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Getting started is simple: 1) Sign up for an account, 2) Choose your desired model, 3) Get your API key, 4) Start making API calls. The entire process takes just minutes."
                }
            },
            {
                "@type": "Question",
                "name": "Is Rayone suitable for production applications?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Rayone is designed for production workloads with robust infrastructure, monitoring, and support. Our platform ensures reliable performance and scalability for enterprise applications."
                }
            },
            {
                "@type": "Question",
                "name": "What programming languages can I use with Rayone?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rayone provides RESTful APIs that work with any programming language. We have specific integrations and examples for Python, Node.js, FastAPI, Streamlit, and more."
                }
            }
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(faqData)}
            </script>
        </Helmet>
    );
};

export default FAQSchema;