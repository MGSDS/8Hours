!function() {
    function hideMenuOnResize() {
        const x = window.matchMedia("(max-width: 65em)");
        if (!x.matches && window.localStorage.getItem("nav_hidden") !== "true") {
            showNav();
            return
        } else if (x.matches) {
        }
        hideNav();
    }

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
        if (!document.getElementById("nav").classList.contains("nav_hidden")) {
            document.getElementById("nav").classList.add("nav_hidden");
        }

        if (!document.getElementById("body").classList.contains("body_no-nav")) {
            document.getElementById("body").classList.add("body_no-nav");
        }
    }

    function showNav() {
        document.getElementById("nav").classList.remove("nav_hidden");
        document.getElementById("body").classList.remove("body_no-nav");
    }

    document.addEventListener("layoutCreated", _ =>
    {
        updateNav()
        window.addEventListener('resize', _ => hideMenuOnResize());
        document.getElementById('header_menu_button').addEventListener('click', _ => showHideNav());
    });
} ()