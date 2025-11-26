// alert("Coucou");

const menuBurger = document.getElementById("menuBurgerToggle");
const navBarOverlay = document.getElementById("navBar");

menuBurger.addEventListener("click", () => {
    if (menuBurger.checked) {
        navBarOverlay.style.display = "flex";
    } else {
        navBarOverlay.style.display = "none";
    }
});