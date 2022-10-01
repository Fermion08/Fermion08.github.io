const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var x = window.innerWidth / 4 + 250;
var y = window.innerHeight / 2;
var d1 = false,
  d2 = false,
  d3 = false,
  d4 = false;

//#region basic

ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = "white";
ctx.lineCap = "round";
ctx.moveTo(x, y);
ctx.lineTo(x + 500, y);
ctx.stroke();

//#endregion

//#region d-line

function dlt(i, xn, yn) {
  setTimeout(function () {
    ctx.lineTo(xn, yn + i);
    ctx.stroke();
  }, 100);
}

function dl() {
  if (d2 == false) {
    return;
  }
  var xn = x + 250;
  var yn = y / 4;
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = "lightgreen";
  ctx.lineCap = "round";

  ctx.moveTo(xn, yn);
  for (var i = 0; i < 800; i++) {
    dlt(i, xn, yn);
  }
}

//#endregion

//#region d-dot

function dd() {
  if (d2 == false) {
    return;
  }
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = "white";
  ctx.lineCap = "round";

  ctx.moveTo(x, y);
  d3 = true;
}

//#endregion

//#region d-arc

function dat1(i) {
  setTimeout(function () {
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "orange";
    ctx.lineCap = "round";
    ctx.arc(x, y, 350, -Math.PI / 3, i / 1000 - Math.PI / 3);
    ctx.stroke();
  }, 100);
}

function dat2(i) {
  setTimeout(function () {
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "orange";
    ctx.lineCap = "round";
    ctx.arc(
      x + 500,
      y,
      350,
      Math.PI - Math.PI / 3,
      Math.PI - Math.PI / 3 + i / 1000
    );
    ctx.stroke();
  }, 100);
}

function da() {
  // if(d1 == false) return;
  for (var i = 0; i < (2000 * Math.PI) / 3; i++) {
    dat1(i);
  }
  setTimeout(function () {}, 100);
  for (var i = 0; i < (2000 * Math.PI) / 3; i++) {
    dat2(i);
  }
  d2 = true;
}

//#endregion

/*ctx.strokeStyle="#a1a1a1";
ctx.lineWidth=10;
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(100, 100);
ctx.lineCap="round";
ctx.stroke();*/
