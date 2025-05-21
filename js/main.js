const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("show");
    const isOpen = navLinks.classList.contains("show");
    menuBtnIcon.setAttribute("class", isOpen?"fa-solid fa-circle-xmark" : "fa-solid fa-bars");
});
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("show");
    menuBtnIcon.setAttribute("class","fa-solid fa-bars");
});



const ScrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// Home page
ScrollReveal().reveal('.home-content h1', {
    ...ScrollRevealOption,
});
ScrollReveal().reveal('.home-content p', {
    ...ScrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal('.home-content .btn', {
    ...ScrollRevealOption,
    delay: 1000,
});

// features page

ScrollReveal().reveal('.features h1', {
    ...ScrollRevealOption,
});
ScrollReveal().reveal('.features .features-box .feat', {
    ...ScrollRevealOption,
    delay: 500,
    interval: 500,
});

// articles page

ScrollReveal().reveal('.articles h1', {
    ...ScrollRevealOption,
});
ScrollReveal().reveal('.articles-box .article', {
    ...ScrollRevealOption,
    delay: 500,
    interval: 500,
});


