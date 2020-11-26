const menu = document.querySelector(".hamburger-menu");
const menuContainer = document.querySelector(".hamburger-menu-container");

menu.addEventListener("click", () => {
  menuContainer.classList.toggle("change");
});
