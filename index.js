
let width = window.screen.width;
console.log(width);
if (width < 600) {
  document.querySelector(".menu").remove();
  document.querySelector(".fas").addEventListener("click", () => {});
}

new Hiraku(".offcanvas-right", {
	btn: "#offcanvas-btn-right",
	fixedHeader: "#header",
	direction: "right"
  });