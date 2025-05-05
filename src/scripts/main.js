// This file contains the JavaScript code for the portfolio website.
// It may include functionality for interactive elements, such as form submissions or animations.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example: Form submission handling
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(form);
            // Process form data here (e.g., send to an API or email)
            alert('Form submitted!'); // Placeholder for actual submission logic
        });
    }
});