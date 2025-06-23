document.addEventListener('DOMContentLoaded', () => {
    // Set up Google Apps Script URL - use this for all forms
    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyTLptn3JnmA_GAK3OToi0NbIVVieWJ4e3uaTcBx3I0p9yewlk2XT3hsKHhM8PMiMzMoA/exec';
    
    // Find all Ollama logo images and invert them
    const ollamaLogos = document.querySelectorAll('img[src*="ollama-logo.png"]');
    ollamaLogos.forEach(img => {
        // Apply CSS filter to invert colors
        img.style.filter = 'invert(1)';
    });

    // Handle code copy button
    const copyButton = document.querySelector('.copy-btn');
    const codeSnippet = document.querySelector('.code-snippet-card pre code');
    
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

    // Handle email interest form
    const emailForm = document.getElementById('email-interest-form');
    const formMessage = document.getElementById('form-message');
    
    if (emailForm && formMessage) {
        emailForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            formMessage.textContent = 'Submitting...';
            formMessage.style.color = 'yellow';

            const formData = new FormData(emailForm);
            const email = formData.get('email');
            
            if (email) {
                try {
                    const response = await fetch(APPS_SCRIPT_URL, {
                        method: 'POST',
                        body: formData,
                        mode: 'no-cors' // Required for Google App Script forms
                    });

                    // Since we are using no-cors, we can't directly read response.text()
                    formMessage.textContent = 'Thanks for your interest! We will keep you updated.';
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

    // Handle currency switcher
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
    };    if (currencyButtons && currencyButtons.length > 0) {
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
    }

    // Handle signup form in footer
    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = signupForm.querySelector('input[type="email"]').value;
            
            if (!email) {
                alert('Please enter your email address');
                return;
            }
            
            try {
                const formData = new FormData(signupForm);
                formData.append('source', 'footer_waitlist');
                
                const response = await fetch(APPS_SCRIPT_URL, {
                    method: 'POST',
                    body: formData,
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
    
    // Handle all other email capture forms on the page
    const allEmailForms = document.querySelectorAll('form[data-form-type="email-capture"]:not(.signup-form)');
    
    allEmailForms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton ? submitButton.textContent : '';
            
            if (submitButton) {
                submitButton.textContent = 'Submitting...';
                submitButton.disabled = true;
            }
            
            if (!emailInput || !emailInput.value) {
                alert('Please enter a valid email');
                if (submitButton) {
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                }
                return;
            }
            
            const formData = new FormData();
            formData.append('email', emailInput.value);
            formData.append('source', form.dataset.source || 'unknown');
            
            try {
                await fetch(APPS_SCRIPT_URL, {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors'
                });
                
                if (submitButton) {
                    submitButton.textContent = 'Success!';
                    
                    setTimeout(() => {
                        submitButton.textContent = originalButtonText;
                        submitButton.disabled = false;
                        form.reset();
                    }, 3000);
                }
                
            } catch (error) {
                console.error('Form submission error:', error);
                if (submitButton) {
                    submitButton.textContent = 'Error!';
                    
                    setTimeout(() => {
                        submitButton.textContent = originalButtonText;
                        submitButton.disabled = false;
                    }, 3000);
                }
            }
        });
    });

    // GitHub signup
    const githubButton = document.querySelector('.github-button');
    if (githubButton) {
        githubButton.addEventListener('click', () => {
            // Replace with your GitHub OAuth URL
            window.location.href = 'https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI';
        });
    }    // Enhanced smooth scroll function
    const smoothScroll = (targetEl, duration = 800) => {
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        
        // Easing function for smoother acceleration/deceleration
        const easeInOutQuad = (t, b, c, d) => {
            t /= d/2;
            if (t < 1) return c/2*t*t + b;
            t--;
            return -c/2 * (t*(t-2) - 1) + b;
        };
        
        requestAnimationFrame(animation);
    };
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                smoothScroll(target);
            }
        });
    });
    
    // Apply smooth scroll to all buttons with scroll targets
    document.querySelectorAll('button[onclick*="scrollIntoView"]').forEach(button => {
        const onclickValue = button.getAttribute('onclick');
        const match = onclickValue.match(/document\.getElementById\(['"]([^'"]+)['"]\)/);
        if (match && match[1]) {
            const targetId = match[1];
            button.removeAttribute('onclick');
            
            button.addEventListener('click', () => {
                const target = document.getElementById(targetId);
                if (target) {
                    smoothScroll(target);
                }
            });
        }
    });

    // Apply smooth scroll to all buttons with data-scroll-target
    document.querySelectorAll('button[data-scroll-target]').forEach(button => {
        const targetId = button.getAttribute('data-scroll-target');
        button.addEventListener('click', () => {
            const target = document.getElementById(targetId);
            if (target) {
                smoothScroll(target);
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

    const navToggle = document.getElementById('mobile-nav-toggle');
    const mainNav = document.getElementById('main-nav');
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('open');
            mainNav.classList.toggle('open');
        });
        // Close menu when a nav link is clicked
        mainNav.querySelectorAll('a, button').forEach(function(link) {
            link.addEventListener('click', function() {
                navToggle.classList.remove('open');
                mainNav.classList.remove('open');
            });
        });
    }
});