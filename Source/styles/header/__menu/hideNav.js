function hideNav(navId, gridId) {
    if (document.getElementById(navId).style.display === "none") {
        document.getElementById(navId).style.display = "block";
        document.getElementById(gridId).style.gridTemplateAreas = '"head head head" "nav main main"';
        return;
    }
    document.getElementById(navId).style.display = "none";
    document.getElementById(gridId).style.gridTemplateAreas = '"head head head" "main main main"';
}