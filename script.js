// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active navigation item
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href').slice(1) === current) {
            li.classList.add('active');
        }
    });
});

// Add 'active' class to the current navigation item
const currentLocation = location.href;
const menuItems = document.querySelectorAll('nav ul li a');
menuItems.forEach(item => {
    if (item.href === currentLocation) {
        item.classList.add('active');
    }
});

// Add scroll padding to account for fixed header
document.documentElement.style.setProperty('--scroll-padding', document.querySelector('header').offsetHeight + 'px');