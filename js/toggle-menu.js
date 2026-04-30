const toggleMenu = document.querySelector(".toggle_menu");
const headerNav = document.querySelector(".header_nav");

toggleMenu.addEventListener("click", () => {
  headerNav.classList.toggle("open");
  toggleMenu.classList.toggle("open");
});
