JavaScript document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle navigation and animate links on burger click
    burger.addEventListener('click', () => {
        // Toggle Nav active state (slides in/out)
        nav.classList.toggle('nav-active');

        // Animate individual navigation links
        navLinks.forEach((link, index) => {
            // If animation is already set (menu is open), clear it to reset for closing
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                // Apply animation with a delay for staggered effect
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Toggle burger icon animation (changes to an 'X')
        burger.classList.toggle('toggle');
    });

    // Close mobile nav when a navigation link is clicked
    // This provides a smooth user experience when navigating on mobile
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                // If nav is open, close it
                nav.classList.remove('nav-active');
                // Reset burger icon to original state
                burger.classList.remove('toggle');
                // Clear individual link animations so they can animate in again next time
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            }
        });
    });
});
