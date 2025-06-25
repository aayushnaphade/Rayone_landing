import React, { useEffect } from 'react';

const QuestionnairePopup = () => {
    useEffect(() => {
        // Add the questionnaire modal HTML to the document
        const modalHTML = `
            <div id="rayone-questionnaire-modal" style="display:none; position:fixed; bottom:32px; right:32px; z-index:9999;">
                <div class="rayone-modal-content" role="dialog" aria-modal="true" aria-labelledby="rayone-modal-title">
                    <!-- Dynamic content will be injected here by JS -->
                </div>
            </div>
        `;
        
        // Check if modal doesn't already exist
        if (!document.getElementById('rayone-questionnaire-modal')) {
            document.body.insertAdjacentHTML('beforeend', modalHTML);
        }

        // Questionnaire logic
        const QUESTIONS = [
            {
                q: 'What best describes your role?',
                options: ['Developer', 'Startup founder', 'Enterprise team', 'Researcher', 'Student']
            },
            {
                q: 'How do you plan to use AI in your projects?',
                options: ['Internal tools', 'Customer-facing apps', 'Prototyping ideas', 'Learning/experiments', 'Not sure yet']
            },
            {
                q: 'What features matter most to you?',
                options: ['Speed', 'Cost', 'Model variety', 'API ease of use']
            },
            {
                q: 'Which LLMs do you prefer?',
                options: ['Mistral', 'LLaMA 3', 'Falcon', 'Any open-source model', 'Not decided']
            },
            {
                q: 'Are you currently using any hosted LLM services?',
                options: ['Yes, actively', 'I\'ve tried a few', 'Planning to try soon', 'Not yet']
            }
        ];

        let currentStep = 0;
        let answers = Array(QUESTIONS.length).fill(null);
        let modal, content;

        function createModal() {
            modal = document.getElementById('rayone-questionnaire-modal');
            content = modal.querySelector('.rayone-modal-content');
            renderStep();
            modal.style.display = 'block';
            setTimeout(() => { modal.style.opacity = 1; }, 10);
            // Trap focus for accessibility
            setTimeout(() => {
                const firstRadio = content.querySelector('input[type=radio]');
                if (firstRadio) firstRadio.focus();
            }, 100);
        }

        function closeModal() {
            modal.style.opacity = 0;
            setTimeout(() => { modal.style.display = 'none'; }, 250);
        }

        async function submitResponses() {
            // Prepare the data for submission
            const responseData = {
                timestamp: new Date().toISOString(),
                responses: {}
            };
            
            // Map answers to questions
            QUESTIONS.forEach((question, index) => {
                responseData.responses[`q${index + 1}`] = answers[index] || 'Skipped';
                responseData.responses[`q${index + 1}_question`] = question.q;
            });
            
            try {
                // Use the same Google Apps Script URL as email forms
                const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyTLptn3JnmA_GAK3OToi0NbIVVieWJ4e3uaTcBx3I0p9yewlk2XT3hsKHhM8PMiMzMoA/exec';
                
                const formData = new FormData();
                formData.append('formType', 'questionnaire');
                formData.append('timestamp', responseData.timestamp);
                formData.append('role', answers[0] || 'Not specified');
                formData.append('aiUsage', answers[1] || 'Not specified');
                formData.append('features', answers[2] || 'Not specified');
                formData.append('llmPreference', answers[3] || 'Not specified');
                formData.append('currentUsage', answers[4] || 'Not specified');
                
                const response = await fetch(APPS_SCRIPT_URL, {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors'
                });
                
                console.log('Questionnaire responses submitted successfully');
            } catch (error) {
                console.error('Error submitting questionnaire responses:', error);
            }
        }

        function renderStep() {
            if (currentStep >= QUESTIONS.length) {
                // Submit responses when questionnaire is completed
                submitResponses();
                
                content.innerHTML = `
                    <button class="rayone-modal-close" aria-label="Close">&times;</button>
                    <div class="rayone-modal-thankyou">Thank you for your feedback! 🎉</div>
                `;
                // Add close functionality to the close button
                content.querySelector('.rayone-modal-close').onclick = () => {
                    document.getElementById('rayone-questionnaire-modal').style.display = 'none';
                };
                return;
            }
            
            const qObj = QUESTIONS[currentStep];
            let optionsHtml = qObj.options.map((opt, i) => `
                <label class="rayone-modal-option">
                    <input type="radio" name="rayone-q${currentStep}" value="${opt.replace(/"/g, '&quot;')}" ${answers[currentStep]===opt?'checked':''} />
                    <span>${opt}</span>
                </label>
            `).join('');
            
            content.innerHTML = `
                <button class="rayone-modal-close" aria-label="Close">&times;</button>
                <div class="rayone-modal-title" id="rayone-modal-title">Help us personalize Rayone for you</div>
                <div class="rayone-modal-question">${qObj.q}</div>
                <form class="rayone-modal-options" autocomplete="off">${optionsHtml}</form>
                <div class="rayone-modal-buttons">
                    <button type="button" class="rayone-btn rayone-btn-cancel">Cancel</button>
                    <button type="button" class="rayone-btn rayone-btn-skip">Skip</button>
                    <button type="button" class="rayone-btn rayone-btn-accent" disabled>Continue</button>
                </div>
            `;
            
            // Button logic
            const radios = content.querySelectorAll('input[type=radio]');
            const btnContinue = content.querySelector('.rayone-btn-accent');
            const btnSkip = content.querySelector('.rayone-btn-skip');
            const btnCancel = content.querySelector('.rayone-btn-cancel');
            
            // Enable continue if selected
            radios.forEach(radio => {
                radio.addEventListener('change', () => {
                    btnContinue.disabled = false;
                });
            });
            
            // Pre-enable if already answered
            if (answers[currentStep]) btnContinue.disabled = false;
            
            // Continue
            btnContinue.onclick = () => {
                const selected = Array.from(radios).find(r => r.checked);
                if (selected) answers[currentStep] = selected.value;
                currentStep++;
                renderStep();
            };
            
            // Skip
            btnSkip.onclick = () => {
                answers[currentStep] = null;
                currentStep++;
                renderStep();
            };
            
            // Cancel
            btnCancel.onclick = closeModal;
            
            // Close (X)
            content.querySelector('.rayone-modal-close').onclick = () => {
                document.getElementById('rayone-questionnaire-modal').style.display = 'none';
            };
        }

        // Show modal after 3 seconds
        const timer = setTimeout(() => {
            if (document.getElementById('rayone-questionnaire-modal')) {
                createModal();
            }
        }, 3000);

        return () => {
            clearTimeout(timer);
            // Clean up modal on component unmount
            const existingModal = document.getElementById('rayone-questionnaire-modal');
            if (existingModal) {
                existingModal.remove();
            }
        };
    }, []);

    return null; // This component doesn't render anything in React, it manages the modal via DOM manipulation
};

export default QuestionnairePopup;