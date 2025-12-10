document.addEventListener('DOMContentLoaded', () => {
    
    /* ==================== SHOW MENU ==================== */
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navLinks = document.querySelectorAll('.nav__link');

    /* Validate if constant exists */
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            // Adds the class defined in CSS to show the menu
            navMenu.classList.toggle('show-menu')
            
            // Toggle Icon between Menu and Close
            if(navMenu.classList.contains('show-menu')){
                navToggle.classList.replace('ri-menu-3-line', 'ri-close-line')
            } else {
                navToggle.classList.replace('ri-close-line', 'ri-menu-3-line')
            }
        })
    }

    /* ==================== REMOVE MENU MOBILE ON LINK CLICK ==================== */
    // Loops through every link (Home, About, etc.) and adds a click event
    navLinks.forEach(n => {
        n.addEventListener('click', () => {
            // 1. Remove the class that makes the menu visible
            navMenu.classList.remove('show-menu')
            
            // 2. Reset the hamburger icon
            if(navToggle){
                navToggle.classList.replace('ri-close-line', 'ri-menu-3-line')
            }
        })
    })

    /* ==================== CHANGE BACKGROUND HEADER ==================== */
    const header = document.getElementById('header')
    
    window.addEventListener('scroll', () => {
        // When the scroll is greater than 50 viewport height, add the scroll-header class
        if (window.scrollY >= 50) {
            header.classList.add('header--scroll')
        } else {
            header.classList.remove('header--scroll')
        }
    })

    /* ==================== THEME TOGGLE (DARK/LIGHT) ==================== */
    const themeToggle = document.getElementById("checkbox");
    const body = document.body;

    // Check for saved theme preference
    const loadTheme = () => {
      const savedTheme = localStorage.getItem("theme");
      
      if (savedTheme === "light") {
        if(themeToggle) themeToggle.checked = true;
        body.classList.add("light_theme");
        body.classList.remove("dark_theme");
      } else {
        if(themeToggle) themeToggle.checked = false;
        body.classList.add("dark_theme");
        body.classList.remove("light_theme");
      }
    }

    // Initialize theme on page load
    loadTheme();

    // Event Listener for Toggle
    if(themeToggle){
        themeToggle.addEventListener("change", function() {
          if (this.checked) {
            body.classList.add("light_theme");
            body.classList.remove("dark_theme");
            localStorage.setItem("theme", "light");
          } else {
            body.classList.add("dark_theme");
            body.classList.remove("light_theme");
            localStorage.setItem("theme", "dark");
          }
        });
    }

    /* ==================== SCROLL REVEAL ANIMATION ==================== */
    // Check if ScrollReveal is loaded to prevent errors
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400,
            // reset: true /* Animations repeat */
        })

        sr.reveal('.hero__content, .about__content')
        sr.reveal('.hero__img', {delay: 500})
        sr.reveal('.hero__info-wrapper, .skills__title, .skills__content', {delay: 500, interval: 100})
        sr.reveal('.qualification__name, .qualification__item', {origin: 'left', interval: 100})
        sr.reveal('.service__card, .project__content', {interval: 100})
        sr.reveal('.contact__content', {origin: 'left'})
        sr.reveal('.contact__btn', {origin: 'right'})
        sr.reveal('.footer__content', {interval: 100})
    }

    /* ==================== TESTIMONIAL SWIPER ==================== */
    // Wrapped in a check to ensure element exists before running Swiper
    if(document.querySelector(".testimonial__wrapper")){
        let testimonialSwiper = new Swiper(".testimonial__wrapper", {
            loop: true,
            spaceBetween: 30,
            centeredSlides: true,
            effect: "coverflow",
            grabCursor: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                520: {
                    slidesPerView: "auto",
                },
            },
        });
    }

});
