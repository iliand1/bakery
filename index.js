let width = window.screen.width;
console.log(width);
if (width < 600) {
    document.querySelector(".menu").remove();
}

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
}
