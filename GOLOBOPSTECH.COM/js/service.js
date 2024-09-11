// welcome section 

document.addEventListener('DOMContentLoaded', () => {
    setupServiceSection();
});

function setupServiceSection() {
    // Add hover effect to service boxes
    const serviceBoxes = document.querySelectorAll('.service3-boxarea');
    serviceBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.classList.add('hovered');
        });
        box.addEventListener('mouseleave', () => {
            box.classList.remove('hovered');
        });
    });

    // Ensure responsive behavior for different screen sizes
    adjustServiceLayout();
    window.addEventListener('resize', adjustServiceLayout);
}

function adjustServiceLayout() {
    const serviceImages = document.querySelectorAll('.service3-imag1 img');
    const isSmallScreen = window.innerWidth < 768;

    serviceImages.forEach(img => {
        if (isSmallScreen) {
            img.style.width = '100%'; // Full width on small screens
            img.style.height = 'auto'; // Maintain aspect ratio
        } else {
            img.style.width = ''; // Reset to original width
            img.style.height = ''; // Reset to original height
        }
    });
}

// Optional: You can add further interactivity or animations
function addServiceBoxAnimation() {
    const serviceBoxes = document.querySelectorAll('.service3-boxarea');
    serviceBoxes.forEach((box, index) => {
        box.style.transitionDelay = `${index * 0.1}s`; // Staggered animations
        box.classList.add('animated');
    });
}
