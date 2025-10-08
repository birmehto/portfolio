'use strict';

// Utility Functions
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// Smooth scroll behavior for navigation
function smoothScrollTo(element) {
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Any additional initialization can go here
  console.log('Portfolio loaded successfully');
});
