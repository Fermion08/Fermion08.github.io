let point = "M 10 10 A 20 20 1 1 0 10 150";

// anime({
//   targets: "pth",
//   d: point,
//   easing: "easeInOutQuad",
//   direction: "alternate",
//   loop: true,
// });
let arc = document.querySelectorAll(".arc");
document.querySelector('#drawArc').onclick = function(){
  document.getElementById('arc1').style.visibility = "visible";
  document.getElementById('arc2').style.visibility = "visible";
  drawArc()};
function drawArc() {
  anime({
  targets: arc,
  strokeDashoffset: [445, 222.5],
  easing: 'easeInOutCubic',
  duration: 1000,
  loop: 1}
  
  );

}
// stroke-dashoffset: 0;