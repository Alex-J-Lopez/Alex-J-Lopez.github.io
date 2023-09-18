function exposeHamburger() {
    var x = document.getElementById("NavButtonsBlock");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}