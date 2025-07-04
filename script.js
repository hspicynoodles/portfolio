document.addEventListener('DOMContentLoaded', () => {
    /* toggle icon navbar  */
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x-circle');
            navbar.classList.toggle('active');
        };
    }

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    let link = document.querySelector('header nav a[href*=' + id + ']');
                    if (link) link.classList.add('active');
                });
            }
        });

        /* sticky navbar */
        let header = document.querySelector('header');
        if (header) {
            header.classList.toggle('sticky', window.scrollY > 100);
        }

        /* remove toggle icon and navbar when click navbar link (scroll) */
        if (menuIcon && navbar) {
            menuIcon.classList.remove('bx-x-circle');
            navbar.classList.remove('active');
        }
    };

    /* scroll reveal */
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    /* typed.js */
    const typed = new Typed('.multiple-text', {
        strings: ['Software Engineer', 'ASU Student', 'Spongebob Lover'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
