// A simple script to handle website interactivity
// ----------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  // Get current year for footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Handle sticky header on scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Handle mobile navigation toggle
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('open');
  });

  // Close mobile nav when a link is clicked
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Handle form submission (front-end only)
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission

      // Here you would typically send the form data to a server
      // For this example, we will just show a confirmation message
      
      const submitBtn = document.getElementById('submitBtn');
      submitBtn.textContent = 'Message Sent!';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = 'Send Enquiry';
        submitBtn.disabled = false;
        enquiryForm.reset();
      }, 3000);
    });
  }
});

