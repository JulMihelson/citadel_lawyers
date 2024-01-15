const mobileMenu = document.querySelector(".js-menu-container");
const openMenuBtn = document.querySelector(".js-open-menu");
const closeMenuBtn = document.querySelector(".js-close-menu");
const backdrop = document.querySelector(".backdrop");
const mobileMenuItem = document.querySelectorAll(".mobile-menu-item");

const toggleMenu = () => {
  const isMenuOpen =
    openMenuBtn.getAttribute("aria-expanded") === "true" || false;
  openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
  mobileMenu.classList.toggle("is-open");
  backdrop.classList.toggle("is-hidden");
};

const closeMenu = () => {
  mobileMenu.classList.remove("is-open");
  openMenuBtn.setAttribute("aria-expanded", false);
  backdrop.classList.add("is-hidden");
};

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", closeMenu);

mobileMenuItem.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
  if (!e.matches) return;
  closeMenu();
});
