let width = window.screen.width;
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
}
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}
if (width < 600) {
  document.querySelector(".menu").remove();
  document.querySelector(".social-media-img").remove();
}

/*new fullpage('#fullpage', {
    autoScrolling:true,
    scrollHorizontally: true
});*/
