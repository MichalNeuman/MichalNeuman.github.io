function showMenu() {
    var topnav = document.getElementById("myTopnav");
    var hamburger = document.getElementById("hamburger");

    if (topnav.className === "topnav") {
        topnav.className = "responsive_topnav";
        hamburger.className = "fa fa-times";
    } else {
        topnav.className = "topnav";
        hamburger.className = "fa fa-bars"
    }

}