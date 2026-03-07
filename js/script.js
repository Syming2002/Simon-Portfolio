// alert("Coucou");

const menuBurger = document.getElementById("menu-burger-toggle");
const redStroke = document.querySelector(".dark-blue-rectangle");
const navBar = document.getElementById("nav-bar");

function openMenuMobile() {
    if (!menuBurger || !redStroke || !navBar) return;
    if (menuBurger.checked) {
        redStroke.classList.add("active");
    } else {
        redStroke.classList.remove("active");
    }
}

openMenuMobile();
menuBurger.addEventListener("change", openMenuMobile);