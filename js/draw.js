const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var x = window.innerWidth/4;
var y = window.innerHeight/2;

ctx.beginPath();
ctx.lineWidth=10;
ctx.strokeStyle="white";
ctx.lineCap="round";
ctx.moveTo(x, y);
ctx.lineTo(x+500, y);
ctx.stroke();

function doSetTimeout(i) {
  setTimeout(function() {
    ctx.lineTo(x, y+i);
    ctx.stroke(); 
  }, 100);
}

function dl() {
  x = x+250;
  y = y/2
  ctx.beginPath();
  ctx.lineWidth=10;
  ctx.strokeStyle="white";
  ctx.lineCap="round";

  ctx.moveTo(x, y);
  for(var i = 0; i < 500; i++) {
    doSetTimeout(i);
  }
}

function dd() {
  ctx.beginPath();
  ctx.lineWidth=10;
  ctx.strokeStyle="white";
  ctx.lineCap="round";

  ctx.moveTo(x, y);
  for(var i = 0; i < 500; i++) {
    doSetTimeout(i);
  }
}

function da() {
  ctx.beginPath();
  ctx.lineWidth=10;
  ctx.strokeStyle="white";
  ctx.lineCap="round";

  ctx.moveTo(x, y);
  for(var i = 0; i < 500; i++) {
    doSetTimeout(i);
  }
}
/*ctx.strokeStyle="#a1a1a1";
ctx.lineWidth=10;
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(100, 100);
ctx.lineCap="round";
ctx.stroke();*/