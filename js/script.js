// alert("Coucou");

const menuBurger = document.getElementById("menuBurgerToggle");
const redStroke = document.querySelector(".redStrokeRectangle");
const navBar = document.getElementById("navBar");

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