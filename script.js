document.addEventListener('DOMContentLoaded', () => {
    // Get references to the elements
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to toggle the menu open/close state
    function toggleMenu() {
        // Toggles the 'active' class on the icon (for the 'X' transformation)
        menuToggle.classList.toggle('active'); 
        
        // Toggles the 'open' class on the navigation (to show/hide the links)
        mainNav.classList.toggle('open');
    }

    //  Add the event listener to the hamburger icon
    menuToggle.addEventListener('click', toggleMenu);

    //  Close the menu when a navigation link is clicked (improves mobile UX)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Only attempt to close if the menu is currently open
            if (menuToggle.classList.contains('active')) {
                toggleMenu(); 
            }
        });
    });
});