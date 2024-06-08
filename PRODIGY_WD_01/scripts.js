// Add an event listener to change the navbar style on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add an event listener to change the style of nav items on hover
document.querySelectorAll('.nav-item a').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#ffcc00';
    });

    item.addEventListener('mouseout', () => {
        item.style.color = '';
    });
});
