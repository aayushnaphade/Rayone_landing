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

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden-scroll');
                entry.target.classList.add('show-scroll');
                // For the hero section elements, apply specific animations
                if (entry.target.classList.contains('hero-content')) {
                    entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
                } else if (entry.target.classList.contains('code-snippet-card')) {
                    entry.target.style.animation = 'fadeInRight 1s ease-out forwards';
                }
                // For content sections, animate internal elements
                if (entry.target.classList.contains('content-section') || entry.target.classList.contains('interest-form-section')) {
                    const h2 = entry.target.querySelector('h2');
                    const subtitle = entry.target.querySelector('.subtitle');
                    const grids = entry.target.querySelectorAll('.features-grid, .steps-grid');

                    if (h2) h2.style.animation = 'fadeInUp 1s ease-out forwards';
                    if (subtitle) subtitle.style.animation = 'fadeInUp 1.2s ease-out forwards';
                    grids.forEach(grid => grid.style.animation = 'fadeIn 1.5s ease-out forwards');

                    // For interest form, specifically target the form
                    const emailFormSection = entry.target.querySelector('.email-form');
                    if (emailFormSection) emailFormSection.style.animation = 'fadeInUp 1s ease-out forwards';
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with the 'hidden-scroll' class
    document.querySelectorAll('.hidden-scroll').forEach(element => {
        observer.observe(element);
    });
}); 