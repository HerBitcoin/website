const nevEl = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    if (window.scrollY >= 70) {
        nevEl.classList.add('navbar-scrolled')
    } else if (window.scrollY < 70) {
        nevEl.classList.remove('navbar-scrolled')
    }
})

// JavaScript code to set the active link based on the current URL
let currentLocation = window.location.href;
let navLinks = document.querySelectorAll(".navbar-nav .nav-link");

for (let i = 0; i < navLinks.length; i++) {
    if (currentLocation.includes(navLinks[i].getAttribute("href")) &&
        navLinks[i].getAttribute("href") !== "") {
        navLinks[i].classList.add("active");
    } else {
        navLinks[i].classList.remove("active");
    }
}
