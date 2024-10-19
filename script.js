window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    const head = document.getElementById("head");
    if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
        head.classList.add("remove");
    } else {
        navbar.classList.remove("scrolled");
        head.classList.remove("remove");
    }
});
