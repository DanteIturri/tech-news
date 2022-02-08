const btnMenu = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-menu");
btnMenu.addEventListener("click", () => {
  menu.classList.toggle("show");
});
ScrollReveal().reveal(".showcase");
ScrollReveal().reveal(".news-cards", { delay: 500 });
ScrollReveal().reveal(".cards-banners-one", { delay: 500 });
ScrollReveal().reveal(".cards-banners-two", { delay: 500 });
