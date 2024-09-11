document.addEventListener('DOMContentLoaded', () => {
    initializeContactForm();
});

function initializeContactForm() {
    const contactForm = document.querySelector('.contact-from-area');
    const submitButton = document.querySelector('.contcat5');
    const inputs = contactForm.querySelectorAll('input, textarea');

    // Add event listener for form submission
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        handleFormSubmission(inputs);
    });

    // Add focus and blur effects for form fields
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.classList.add('input-focused');
        });

        input.addEventListener('blur', () => {
            if (input.value.trim() === '') {
                input.classList.remove('input-focused');
            }
        });
    });

    // Google Map integration - adjust iframe responsiveness
    adjustMapIframe();
    window.addEventListener('resize', adjustMapIframe);
}

function handleFormSubmission(inputs) {
    const formData = {};

    inputs.forEach(input => {
        formData[input.placeholder] = input.value.trim();
    });

    // Validate form data (simple validation example)
    if (validateFormData(formData)) {
        alert('Form submitted successfully!');
        // You can implement form submission to a server here using fetch or XMLHttpRequest.
    } else {
        alert('Please fill in all required fields.');
    }
}

function validateFormData(data) {
    return Object.values(data).every(value => value !== '');
}

function adjustMapIframe() {
    const iframe = document.querySelector('.gmap_iframe');
    if (iframe) {
        const containerWidth = iframe.parentElement.offsetWidth;
        const newHeight = containerWidth * 0.42; // Aspect ratio for the map (16:9)
        iframe.style.width = containerWidth + 'px';
        iframe.style.height = newHeight + 'px';
    }
}



// FAQ 
document.addEventListener('DOMContentLoaded', () => {
    initializeAccordion();
});

function initializeAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const button = header.querySelector('.accordion-button');

        button.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.accordion-item .accordion-collapse.show');

            if (currentlyActive && currentlyActive !== item.querySelector('.accordion-collapse')) {
                // Close the currently active panel
                closeAccordion(currentlyActive);
            }

            toggleAccordion(item.querySelector('.accordion-collapse'));
        });
    });
}

function toggleAccordion(panel) {
    if (panel.classList.contains('show')) {
        closeAccordion(panel);
    } else {
        openAccordion(panel);
    }
}

function openAccordion(panel) {
    panel.style.height = panel.scrollHeight + 'px';
    panel.classList.add('show');
}

function closeAccordion(panel) {
    panel.style.height = 0;
    panel.classList.remove('show');
}
