// Botón Ir Arriba
document.getElementById("boton-arriba").addEventListener("click", scrollUp);

function scrollUp() {
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
        // window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, 0);
        botonArriba.style.transform = "scale(0)";
    }
}

botonArriba = document.getElementById("boton-arriba");
window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;
    if (scroll > 100) {
        botonArriba.style.transform = "scale(1)";
    } else {
        botonArriba.style.transform = "scale(0)";
    }
}


// select the humburger menu
const toggle = document.getElementById("toggle");
// select the nav
const nav = document.getElementById("nav");
// select all li in .navbar-nav
const ul = document.querySelectorAll(".navbar-nav > li");

// display all the lists in a nav
const handleClick = () => {
    console.log("click");
    nav.classList.toggle("active");
};
toggle.addEventListener("click", handleClick);

// remove the menu when click each lists
ul.forEach((li) => {
    li.onclick = function () {
        nav.classList.remove("active");
    };
});
