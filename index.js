let width = window.screen.width;
console.log(width);
if (width < 600) {
  document.querySelector(".menu").remove();
  document.querySelector(".social-media-img").remove();
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
}
/*new fullpage('#fullpage', {
    autoScrolling:true,
    scrollHorizontally: true
});*/
