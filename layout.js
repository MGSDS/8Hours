const header =
    "   <header class=\"header\">\n" +
    "    <div class=\"menu-icon header__menu\" onclick=\"hideNav('nav', 'body')\">\n" +
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
    "        <li id=\"Main\" class=\"menu__item\"><a class=\"link text_semi-bolt text_size_l text_grey\" href=\"/\">Main</a></li>\n" +
    "        <li id=\"Calendar\" class=\"menu__item\"><a class=\"link text_semi-bolt text_size_l text_grey\" href=\"Calendar\">Calendar</a></li>\n" +
    "        <li id=\"Projects\" class=\"menu__item\"><a class=\"link text_semi-bolt text_size_l text_grey\" href=\"Projects\">Projects</a></li>\n" +
    "      </ul>\n" +
    "    </nav>";

const pageIds =
    {
       'index.html' : 'Main',
       'calendar.html' : 'Calendar',
       'projects.html' : 'Projects'
    }

function createLayout() {
    document.body.innerHTML += header + nav;
    let page = document.location.pathname.split('/').pop();
    document.getElementById(pageIds[page]).classList += ' menu__item_selected';
    // document.getElementById('nav')
}