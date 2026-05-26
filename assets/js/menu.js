document.querySelectorAll("#menu img").forEach(img => {
    img.decode();
});

document.getElementById("menu-button").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("open");
});

document.getElementById("menu-close").addEventListener("click", function () {
    document.getElementById("menu").classList.remove("open");
});

document.getElementById("menu-general-button").addEventListener("click", function () {
    document.getElementById("menu").classList.remove("open");
});