// Function to initialize the counter animations
const initializeCounters = () => {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target'); // Get the target number
      const count = +counter.innerText; // Get the current number

      // Calculate the increment value based on the target
      const increment = target / 200;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment); // Update the counter
        setTimeout(updateCounter, 8); // Recursive call to continue the count
      } else {
        counter.innerText = target; // Ensure the counter reaches the target
      }
    };

    updateCounter(); // Start the counter animation
  });
};

// Function to set up the page after DOM is loaded
// const setupPage = () => {
  // Initialize counters
  initializeCounters();

  // Additional setup code can be added here
// };

// Document ready function
document.addEventListener('DOMContentLoaded', setupPage);


// vission 

// Function to handle tab switching
const handleTabSwitching = () => {
  const tabs = document.querySelectorAll('.nav-link'); // Select all tab buttons
  const tabContents = document.querySelectorAll('.tab-pane'); // Select all tab content areas

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and contents
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('show', 'active'));

      // Add active class to the clicked tab and corresponding content
      tab.classList.add('active');
      const targetContent = document.querySelector(tab.getAttribute('data-bs-target'));
      targetContent.classList.add('show', 'active');
    });
  });
};

// Function to set up the page after DOM is loaded
const setupPage = () => {
  // Initialize tab switching functionality
  handleTabSwitching();
  initializeCounters();

  // Additional setup code can be added here
};

// Document ready function
document.addEventListener('DOMContentLoaded', setupPage);


// mission 

// Function to be executed when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // This function will set up any required event listeners or functionality
  setupMissionArea();
});

// Function to set up the Mission Area section
const setupMissionArea = () => {
  // Example: Adding a click event listener to the "Learn More" button
  const learnMoreButton = document.querySelector('.theme6-btn6');
  if (learnMoreButton) {
    learnMoreButton.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default action (navigation)

      // Example action: Log to console or redirect to another page
      console.log('Learn More button clicked');

      // Perform a redirect to another page
      window.location.href = 'servicev1.html';
    });
  }

  // Example: Adding a hover effect on list items
  const listItems = document.querySelectorAll('.missiontextarea ul li');
  listItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.style.color = '#ff6f61'; // Change color on hover
    });
    item.addEventListener('mouseout', () => {
      item.style.color = '#17a2b8'; // Reset color when not hovered
    });
  });

  // Any other setup code for the mission area can be added here
};



// law providen area 

document.addEventListener('DOMContentLoaded', () => {
  // Call the setup function when the DOM is fully loaded
  setupLawProvideSection();
});

// Function to set up the Law Provide Section
const setupLawProvideSection = () => {
  // Add event listener to the "Meet Our Attorneys" button
  const meetOurAttorneysButton = document.querySelector('.theme6-btn6');
  if (meetOurAttorneysButton) {
      meetOurAttorneysButton.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent the default link action
          window.location.href = 'team.html'; // Redirect to team.html
      });
  }

  // Add click event listeners to the guidance boxes
  const guidanceLinks = document.querySelectorAll('.lax-conultingprovide a');
  guidanceLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent the default link action
          window.location.href = link.getAttribute('href'); // Redirect to the corresponding service page
      });
  });

  // Additional setup actions for the section can be added here
};


// team 
document.addEventListener('DOMContentLoaded', () => {
  setupTeamSection();
});

// Function to set up the team section
const setupTeamSection = () => {
  // Add event listeners to the social media icons
  const socialMediaLinks = document.querySelectorAll('.project-content-two ul li a');
  socialMediaLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          const url = link.getAttribute('href');
          if (url && url !== '#') {
              window.open(url, '_blank'); // Open the social media link in a new tab
          } else {
              event.preventDefault(); // Prevent the default action if the link is a placeholder
          }
      });
  });

  // Add event listeners to the team member names
  const teamMemberLinks = document.querySelectorAll('.team-pera h1 a');
  teamMemberLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent the default link action
          window.location.href = link.getAttribute('href'); // Redirect to the team.html page or a specific team member's page
      });
  });
};


// cta section 

document.addEventListener('DOMContentLoaded', () => {
  setupCTASection();
});

// Function to set up the CTA section
const setupCTASection = () => {
  // Add event listener to the "Contact Us" button
  const contactButton = document.querySelector('.cta5-btn5-sexction a');
  if (contactButton) {
      contactButton.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent the default link action
          window.location.href = contactButton.getAttribute('href'); // Redirect to the contact2.html page
      });
  }

  // Optionally, you can add any other interactions or animations needed for this section
};


