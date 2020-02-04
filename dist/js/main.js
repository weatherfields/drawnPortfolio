// Select Dom Items
const menuBtn = document.querySelector(".menu-btn");

const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navGtr = document.querySelector(".gtr");

const navItems = document.querySelectorAll(".nav-item");

// set Initial State Of Menu

let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuBtn.classList.toggle("close");
  menu.classList.toggle("show");
  menuNav.classList.toggle("show");
  menuBranding.classList.toggle("show");
  navGtr.classList.toggle("show");
  navItems.forEach(item => item.classList.toggle("show"));
  showMenu = !showMenu;
}
