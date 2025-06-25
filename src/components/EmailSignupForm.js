import React, { useState } from 'react';

const EmailSignupForm = ({ source = 'default' }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyTLptn3JnmA_GAK3OToi0NbIVVieWJ4e3uaTcBx3I0p9yewlk2XT3hsKHhM8PMiMzMoA/exec';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('Submitting...');

        const formData = new FormData();
        formData.append('email', email);
        formData.append('source', source);
        formData.append('timestamp', new Date().toISOString());

        try {
            await fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });
            
            setStatus('Thank you! We\'ll be in touch soon.');
            setEmail('');
            
            // Clear success message after 3 seconds
            setTimeout(() => setStatus(''), 3000);
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('Something went wrong. Please try again.');
            
            // Clear error message after 3 seconds
            setTimeout(() => setStatus(''), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <form 
                className="signup-form" 
                onSubmit={handleSubmit}
                data-form-type="email-capture" 
                data-source={source}
            >
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                    style={{ color: 'black' }}
                />
                <button 
                    type="submit" 
                    className="primary-button"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                </button>
            </form>
            {status && (
                <div style={{ 
                    marginTop: '16px', 
                    color: status.includes('Thank you') ? '#4CAF50' : '#FF6B6B',
                    textAlign: 'center'
                }}>
                    {status}
                </div>
            )}
        </>
    );
};

export default EmailSignupForm;