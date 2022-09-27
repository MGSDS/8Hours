function hideNav(navId, gridId) {
    if (!document.getElementById(navId).classList.contains("nav_hidden")) {
        document.getElementById(navId).classList.add("nav_hidden");
        document.getElementById(gridId).classList.add("body_no-nav");
        return;
    }
    document.getElementById(navId).classList.remove("nav_hidden");
    document.getElementById(gridId).classList.remove("body_no-nav");
}