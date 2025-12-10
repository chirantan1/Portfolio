const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header"),
  themeToggle = document.getElementById("checkbox");

// Check if elements exist before adding event listeners
if (navToggle) {
  // open and close menu
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--open");
    changeIcon();
  });
}

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav__menu--open")) {
      navMenu.classList.remove("nav__menu--open");
    }
    changeIcon();
  });
});

// Change nav toggle icon
function changeIcon() {
  if (navToggle) {
    if (navMenu.classList.contains("nav__menu--open")) {
      navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
    } else {
      navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
    }
  }
}

// Theme Toggle Functionality
if (themeToggle) {
  themeToggle.addEventListener("change", function() {
    if (this.checked) {
      document.body.classList.add("light_theme");
      document.body.classList.remove("dark_theme");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark_theme");
      document.body.classList.remove("light_theme");
      localStorage.setItem("theme", "dark");
    }
  });
}

// Check for saved theme preference
function loadTheme() {
  if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "light") {
      themeToggle.checked = true;
      document.body.classList.add("light_theme");
      document.body.classList.remove("dark_theme");
    } else {
      themeToggle.checked = false;
      document.body.classList.add("dark_theme");
      document.body.classList.remove("light_theme");
    }
  }
}

// Initialize theme on page load
loadTheme();

// Check if testimonial wrapper exists before initializing Swiper
const testimonialWrapper = document.querySelector(".testimonial__wrapper");
if (testimonialWrapper) {
  const testimonialSlide = new Swiper(".testimonial__wrapper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: 1,
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

// header scroll animation
if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("header--scroll");
    } else {
      header.classList.remove("header--scroll");
    }
  });
}

// Initialize ScrollReveal only if it exists
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    duration: 2000,
    distance: "100px",
    delay: 400,
    reset: false,
  });

  sr.reveal(".hero__content, .about__content");
  sr.reveal(".hero__img", { origin: "top" });

  sr.reveal(
    ".hero__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .service__card, .project__content, .footer__content",
    {
      delay: 500,
      interval: 100,
    }
  );

  sr.reveal(".qualification__footer-text, .contact__content", {
    origin: "left",
  });

  sr.reveal(".qualification__footer .btn, .contact__btn", { origin: "right" });
}
