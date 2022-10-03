!function () {
    const header =
        "   <header class=\"header\">\n" +
        "    <div id=\"header_menu_button\" class=\"menu-icon header__menu\">\n" +
        "      <div class=\"menu-icon__row menu-icon__row_size_s\"></div>\n" +
        "      <div class=\"menu-icon__row menu-icon__row_size_s\"></div>\n" +
        "      <div class=\"menu-icon__row menu-icon__row_size_s\"></div>\n" +
        "    </div>\n" +
        "    <img class=\"logo header__logo\" src=\"img/logo/8HoursDark%20Small.png\"/>\n" +
        "    <div class=\"header__space\"></div>\n" +
        "    <div class=\"header__profile\">\n" +
        "      <div class=\"text header__profile_text text__size_m text_semi-bolt text_white\"> Kate </div>\n" +
        "      <img class=\"header__profile-image\" src=\"img/avatar%20placeholder.jpg\"/>\n" +
        "    </div>\n" +
        "  </header>\n";
    const nav =
        "    <nav id=\"nav\" class=\"nav nav__menu\">\n" +
        "      <ul class=\"menu\">\n" +
        "        <li id=\"Main\" class=\"menu__item\"><a class=\"link text_semi-bolt text_size_l text_grey\" href=\"/8Hours\">Main</a></li>\n" +
        "        <li id=\"Calendar\" class=\"menu__item\"><a class=\"link text_semi-bolt text_size_l text_grey\" href=\"Calendar\">Calendar</a></li>\n" +
        "        <li id=\"Projects\" class=\"menu__item\"><a class=\"link text_semi-bolt text_size_l text_grey\" href=\"Projects\">Projects</a></li>\n" +
        "      </ul>\n" +
        "      <div class=\"nav__space\"></div>\n" +
        "      <div class=\"nav__load-timer\">\n" +
        "           <text id=\"load-timer\" class='text text_size_s text_grey'></text>\n" +
        "      </div>\n" +
        "    </nav>";

    const pageIds =
        {
            '': 'Main',
            'Calendar': 'Calendar',
            'Projects': 'Projects'
        }

    function createLayout() {
        if (window.localStorage.getItem("nav_hidden") === undefined) {
            window.localStorage.setItem("nav_hidden", "false")
        }

        document.body.innerHTML += header + nav;
        var ev = new Event("layoutCreated")
        document.dispatchEvent(ev);
    }

    function selectCurrentNavPage() {
        let page = document.location.pathname.split('/').pop();
        document.getElementById(pageIds[page]).classList += ' menu__item_selected';
    }

    document.addEventListener("DOMContentLoaded", _ => createLayout())
    document.addEventListener("layoutCreated", _=>selectCurrentNavPage())
}();