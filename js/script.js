// alert("Coucou");

const menuBurger = document.getElementById("menu-burger-toggle");
const darkBlueRectangle = document.querySelector(".dark-blue-rectangle");
const navBar = document.getElementById("nav-bar");

function openMenuMobile() {
    if (!menuBurger || !darkBlueRectangle || !navBar) return;
    if (menuBurger.checked) {
        darkBlueRectangle.classList.add("active");
    } else {
        darkBlueRectangle.classList.remove("active");
    }
}

menuBurger.addEventListener("change", openMenuMobile);

function onLogoClick() {
    window.location.href = "/index.html";
} 