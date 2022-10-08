let img = document.getElementById("bgi");
const body = document.querySelector("body");
const section = body.querySelector(".section");

function handleWheele(event) {
  console.log(event);
}

// setInterval(function() { if(this.window.scrollY === 0) {
//     img.animate({ background: "50",
//   }, 1000);
// } }, 1000)

// window.addEventListener("load", function() {
//     if(this.window.scrollY === 0) {
//         img.animate({ left: "0%", transform: "scale(2)" }, 2000);
//     }
// });
// function init() {
//     window.onmousewheel = function(e) {
//         console.dir(e);
//         img.style.backgroundSize=(100+window.scrollY/2).toString() + "%";
//     }
// }
