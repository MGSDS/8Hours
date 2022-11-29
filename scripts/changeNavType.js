!function (){
    function changeNavTypeOnResize() {
    const x = window.matchMedia("(max-width: 50em)");
       if (x.matches) {
            document.getElementById("nav").classList.add("nav_mobile");
            document.getElementById("body").classList.add("body_mobile");
            document.getElementById("menu").classList.add("menu_mobile");
            document.getElementById("nav-load-timer").classList.add("nav__load-timer_mobile");
           document.getElementById("nav-space").classList.add("nav__space_mobile");
       }
       else {
            document.getElementById("nav").classList.remove("nav__mobile");
            document.getElementById("body").classList.remove("body_mobile");
            document.getElementById("menu").classList.remove("menu_mobile");
            document.getElementById("nav-load-timer").classList.remove("nav__load-timer_mobile");
              document.getElementById("nav-space").classList.remove("nav__space_mobile");
       }
    }
    window.addEventListener('resize', _ => changeNavTypeOnResize());
    document.addEventListener('layoutCreated', _ => changeNavTypeOnResize());
} ();