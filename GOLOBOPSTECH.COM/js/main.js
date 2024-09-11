// Main JS Code
document.addEventListener('DOMContentLoaded', function () {
  // Variables
  // const header = document.getElementById('header');
  let header =document.querySelector('#header');

  let menuItems = document.querySelectorAll('.main-menu-ex a');
  let megaDropdown = document.querySelector('.mega-dropdawn a');
   contactDetails = document.querySelector('.contact-3');

  // Add event listener for dropdown hover (if you want to enable dropdown on hover)
  if (megaDropdown) {
    megaDropdown.addEventListener('mouseover', function () {
      // Toggle dropdown menu visibility on hover
      this.nextElementSibling.classList.add('show');
    });

    megaDropdown.addEventListener('mouseout', function () {
      // Hide dropdown when not hovering
      this.nextElementSibling.classList.remove('show');
    });
  }

  // Mobile menu toggle (for mobile burger menu)
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainMenu = document.querySelector('.main-menu-ex');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function () {
      mainMenu.classList.toggle('open');
    });
  }

  // Add scroll event for sticky header
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
});

// About JS
document.addEventListener('DOMContentLoaded', function () {
  // Initialize AOS (Animate On Scroll) library
  AOS.init();

  // Scroll event for triggering AOS animations manually if needed (optional)
  window.addEventListener('scroll', function () {
    AOS.refresh(); // Refresh AOS on scroll to ensure animations trigger correctly
  });

  // Highlight active section based on scroll position (Optional)
  const sections = document.querySelectorAll('.abouthome6-section-areas');
  const navLinks = document.querySelectorAll('.main-menu-ex a');

  window.addEventListener('scroll', function () {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 50;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
});

// Counter Section
document.addEventListener('DOMContentLoaded', function () {
  // Initialize AOS (Animate On Scroll) library
  AOS.init();

  // Function to animate counters
  function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  // Trigger counters when the section is in view
  const counterSection = document.querySelector('.counter6-scetion-area');
  const counterElements = document.querySelectorAll('.counter');
  let counterTriggered = false;

  function startCounters() {
    if (!counterTriggered) {
      counterElements.forEach(counter => {
        const endValue = parseInt(counter.textContent);
        animateCounter(counter, 0, endValue, 2000); // Animate from 0 to the end value over 2 seconds
      });
      counterTriggered = true;
    }
  }

  // Observer to watch when the counter section comes into view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounters();
        observer.unobserve(counterSection); // Stop observing once counters start
      }
    });
  }, { threshold: 0.5 });

  observer.observe(counterSection);
});

// Service Section
document.addEventListener('DOMContentLoaded', function () {
  // Initialize AOS (Animate On Scroll) library
  AOS.init({ once: true }); // Ensures animations only happen once when elements come into view

  // Select all service boxes for further interactivity (if needed)
  const serviceBoxes = document.querySelectorAll('.service6bor-area6');

  serviceBoxes.forEach(box => {
    // Example of adding an event listener to service boxes for additional interactivity
    box.addEventListener('mouseenter', () => {
      // Add some effect or change, e.g., changing background color on hover
      box.style.backgroundColor = '#1d2490';
    });

    box.addEventListener('mouseleave', () => {
      // Revert the background color when the mouse leaves the box
      box.style.backgroundColor = '';
    });
  });
});

// Testimonial Section
$(document).ready(function () {
  // Initialize the Owl Carousel
  $('.owl5-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: true,
    items: 1,
    navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      1000: { items: 1 }
    }
  });

  // AOS (Animate on Scroll) Initialization
  AOS.init({
    duration: 1200, // Duration of animation in milliseconds
    easing: 'ease-in-out', // Easing for animations
    once: true, // Whether animation should happen only once
    mirror: false // Whether elements should animate out while scrolling past them
  });
});

// Testimonial Section (Second instance)
$(document).ready(function () {
  // Initialize the Owl Carousel
  $('.owl5-carousel').owlCarousel({
    loop: true,
    margin: 20, // Reduced margin between items
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000, // Reduced autoplay timeout
    autoplayHoverPause: true,
    dots: true,
    items: 1,
    navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      1000: { items: 1 }
    }
  });

  // AOS (Animate on Scroll) Initialization
  AOS.init({
    duration: 800, // Reduced animation duration
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
});

// Footer Section
document.addEventListener('DOMContentLoaded', () => {
  setupFooter();
});

const setupFooter = () => {
  // Handle the subscription form submission
  const subscriptionForm = document.querySelector('.contact6-ctafrom form');
  if (subscriptionForm) {
    subscriptionForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission
      const emailInput = subscriptionForm.querySelector('input[type="text"]').value;
      if (validateEmail(emailInput)) {
        alert('Thank you for subscribing!'); // Display a thank you message
        subscriptionForm.reset(); // Clear the form
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }

  // Make social icons clickable and responsive
  const socialLinks = document.querySelectorAll('.icon-social-links a');
  socialLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const url = link.getAttribute('href');
      if (url) {
        window.open(url, '_blank'); // Open the social link in a new tab
      }
    });
  });

  // Ensure responsive behavior for different screen sizes
  adjustFooterLayout();
  window.addEventListener('resize', adjustFooterLayout);
};

// Function to validate email format
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Function to adjust the footer layout based on screen size
const adjustFooterLayout = () => {
  const contactSection = document.querySelector('.contact-footer');
  if (window.innerWidth < 768) {
    contactSection.classList.add('text-center'); // Center the contact section on small screens
  } else {
    contactSection.classList.remove('text-center'); // Reset to original layout on larger screens
  }
};

// Phone JS
function toggleMenu() {
  const menu = document.querySelector('.main-menu-ex');
  menu.classList.toggle('d-block'); // Toggle the 'active' class for mobile menu
}

// Function to handle showing/hiding the toggle button based on screen width

function handleResize() {
  const toggleButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.main-menu-ex');

  // If the screen width is greater than or equal to 992px, hide the toggle button and ensure the menu is shown
  if (window.innerWidth >= 992) {
      toggleButton.style.display = 'none';
      menu.classList.remove('d-block');
      menu.classList.add('d-lg-block');
  } 
  // If the screen width is less than 992px, show the toggle button and hide the menu
  else {
      toggleButton.style.display = 'block';
      menu.classList.remove('d-lg-block');
      menu.classList.remove('d-block'); // Ensure the menu is hidden initially
  }
}

// Attach event listeners
window.addEventListener('resize', handleResize); // Handle resizing of window
window.addEventListener('load', handleResize);   // Handle initial load

// Ensure clicking anywhere outside the menu closes it (optional)
document.addEventListener('click', function(event) {
  const toggleButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.main-menu-ex');
  
  if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
      menu.classList.remove('d-block'); // Hide menu when clicked outside
  }
});