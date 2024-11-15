const navbar = document.getElementById('navbar');
const navItems = document.querySelectorAll('.nav-item a');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#FFD700'; // Change color on hover (e.g., Gold)
    });

    item.addEventListener('mouseout', () => {
        item.style.color = ''; // Revert to default color
    });
});
