function hideMenuOnResize() {
    const x = window.matchMedia("(max-width: 65em)");
    if (x.matches) {
        document.getElementById("nav").classList.add("nav_hidden");
        document.getElementById("body").classList.add("body_no-nav");
    }

    else {
        document.getElementById("nav").classList.remove("nav_hidden");
        document.getElementById("body").classList.remove("body_no-nav");
    }
}