const menu = document.getElementById("menu");
const homepage = document.querySelector(".homepage-flex");
const openBtn = document.getElementById("homepage-arrow");
const closeBtn = document.getElementById("menu-homepage-button");


// run this on page load, not on button click
document.querySelectorAll("#menu img").forEach(img => {
    img.decode(); // tells browser to decode async before needed
});

openBtn.addEventListener("click", () => {
    homepage.classList.add("hide");
    menu.classList.add("open");
    document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
    homepage.classList.remove("hide");
    menu.classList.remove("open");
    document.body.style.overflow = "";
});