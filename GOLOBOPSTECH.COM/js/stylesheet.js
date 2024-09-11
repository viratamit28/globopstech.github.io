
// Function to toggle the visibility of the menu on smaller screens
function toggleMenu() {
    const menu = document.querySelector('.main-menu-ex');
    menu.classList.toggle('d-block'); // Toggle 'd-block' to show/hide menu
}

// Function to handle showing/hiding the toggle button and menu based on screen size
function handleResize() {
    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.main-menu-ex');

    // If screen width is greater than or equal to 992px, hide the toggle button and ensure the menu is visible
    if (window.innerWidth >= 992) {
        toggleButton.style.display = 'none';
        menu.classList.remove('d-block');
        menu.classList.add('d-lg-block');
    } 
    // If screen width is less than 992px, show the toggle button and hide the menu
    else {
        toggleButton.style.display = 'block';
        menu.classList.remove('d-lg-block');
        menu.classList.remove('d-block'); // Ensure menu is hidden initially on mobile
    }
}

// Run the handleResize function on window resize and page load
window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
