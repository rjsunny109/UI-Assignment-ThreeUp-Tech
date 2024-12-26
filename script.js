let lastScrollY = window.scrollY; // Track the last scroll position
const navbar = document.querySelector('header'); // Navbar element
const heroSection = document.querySelector('.hero'); // Hero section element

// Navbar Hide/Show on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // User is scrolling down
        navbar.style.top = '-100px'; // Hide the navbar
    } else {
        // User is scrolling up
        navbar.style.top = '0'; // Show the navbar
    }
    lastScrollY = window.scrollY; // Update the last scroll position
});

// Hero Section Fading Effect
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY; // Get the scroll position
    const heroHeight = heroSection.offsetHeight; // Get the height of the hero section

    // Calculate opacity relative to the scroll position
    const opacity = 1 - scrollTop / heroHeight;

    // Ensure opacity doesn't go below 0
    heroSection.style.opacity = Math.max(opacity, 0);
});
