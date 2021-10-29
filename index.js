
let width = window.screen.width;
console.log(width);
if (width < 600) {

  document.querySelector(".menu").remove();
  new Hiraku(".offcanvas-right", {
  btn: "#offcanvas-btn-right",
	  fixedHeader: "#header",
	  direction: "right",
	});
}
function openNav() {
	document.getElementById("mySidenav").style.width = "100%";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0px";
  } 