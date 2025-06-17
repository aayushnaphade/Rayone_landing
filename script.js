document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.querySelector('.copy-btn');
    const codeSnippet = document.querySelector('.code-snippet-card pre code');
    const emailForm = document.getElementById('email-interest-form');
    const formMessage = document.getElementById('form-message');

    if (copyButton && codeSnippet) {
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(codeSnippet.textContent)
                .then(() => {
                    copyButton.textContent = 'Copied!';
                    setTimeout(() => {
                        copyButton.textContent = 'Copy';
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        });
    }

    if (emailForm && formMessage) {
        emailForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            formMessage.textContent = 'Submitting...';
            formMessage.style.color = 'yellow';

            const formData = new FormData(emailForm);
            const email = formData.get('email');

            if (email) {
                try {
                    const response = await fetch('https://script.google.com/macros/s/AKfycbz1eaTbhO6Jq1Ir2-jC4Mgs3scNjkSsfS9JvT3v1LsoQZu7zZFfl4Ybjsg-SWCOgYOg/exec', {
                        method: 'POST',
                        body: formData,
                        mode: 'no-cors' // Required for Google App Script forms
                    });

                    // Since we are using no-cors, we can't directly read response.text()
                    // We assume success if no network error occurred.
                    formMessage.textContent = 'Thanks for your interest! We\'ll keep you updated.';
                    formMessage.style.color = 'lightgreen';
                    emailForm.reset();
                } catch (error) {
                    console.error('Error submitting form:', error);
                    formMessage.textContent = 'There was an error. Please try again later.';
                    formMessage.style.color = 'red';
                }
            } else {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.style.color = 'orange';
            }
        });
    }

    // Currency switcher
    const currencyButtons = document.querySelectorAll('.currency-switcher button');
    const pricingCards = document.querySelectorAll('.pricing-card .price');
    
    const prices = {
        INR: {
            free: '₹0',
            developer: '₹499',
            team: '₹1999',
            enterprise: 'Custom'
        },
        USD: {
            free: '$0',
            developer: '$6',
            team: '$24',
            enterprise: 'Custom'
        }
    };

    currencyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            currencyButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update prices
            const currency = button.textContent;
            pricingCards.forEach((card, index) => {
                const plan = ['free', 'developer', 'team', 'enterprise'][index];
                card.textContent = prices[currency][plan];
            });
        });
    });

    // Form submission
    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = signupForm.querySelector('input[type="email"]').value;
            
            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycbz1eaTbhO6Jq1Ir2-jC4Mgs3scNjkSsfS9JvT3v1LsoQZu7zZFfl4Ybjsg-SWCOgYOg/exec', {
                    method: 'POST',
                    body: new FormData(signupForm),
                    mode: 'no-cors'
                });

                // Show success message
                const successMessage = document.createElement('p');
                successMessage.textContent = 'Thanks for joining! We\'ll keep you updated.';
                successMessage.style.color = 'var(--accent-1)';
                signupForm.appendChild(successMessage);
                signupForm.reset();

                // Remove message after 3 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            } catch (error) {
                console.error('Error submitting form:', error);
                const errorMessage = document.createElement('p');
                errorMessage.textContent = 'There was an error. Please try again later.';
                errorMessage.style.color = 'var(--accent-2)';
                signupForm.appendChild(errorMessage);

                setTimeout(() => {
                    errorMessage.remove();
                }, 3000);
            }
        });
    }

    // GitHub signup
    const githubButton = document.querySelector('.github-button');
    if (githubButton) {
        githubButton.addEventListener('click', () => {
            // Replace with your GitHub OAuth URL
            window.location.href = 'https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI';
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
}); 