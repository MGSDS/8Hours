!function() {
    function showHideNav() {
        if (window.localStorage.getItem("nav_hidden") === "false") {
            window.localStorage.setItem("nav_hidden", "true");
        } else {
            window.localStorage.setItem("nav_hidden", "false");
        }
        updateNav();
    }

    function updateNav() {
        if (window.localStorage.getItem("nav_hidden") !== "true") {
            window.localStorage.setItem("nav_hidden", "false")
            showNav();
            return;
        }

        hideNav();
    }

    function hideNav() {
        document.getElementById("nav").classList.add("nav_hidden");
        document.getElementById("body").classList.add("body_no-nav");
    }

    function showNav() {
        document.getElementById("nav").classList.remove("nav_hidden");
        document.getElementById("body").classList.remove("body_no-nav");
    }

    document.addEventListener("layoutCreated", _ =>
    {
        updateNav()
        document.getElementById('header_menu_button').addEventListener('click', _ => showHideNav());
    });
} ()