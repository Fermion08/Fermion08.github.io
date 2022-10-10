// anime({
//   targets: "pth",
//   d: point,
//   easing: "easeInOutQuad",
//   direction: "alternate",
//   loop: true,
// });


//#region bool V
let arcIs = false;
let dotIs = false;
let lineIs = false;
let rSideIs = false;
//#endregion


//#region getting Es
let arc = document.querySelectorAll(".arc");
let dot = document.querySelectorAll(".dot");
let line = document.querySelectorAll(".line");
let grid = document.querySelectorAll(".grid");
let rSide = document.querySelectorAll(".rSide");
let speedwagon = document.getElementById("speedwagon");
//#endregion


//#region draw

function drawArc() {
  speedwagon.innerText="선분AB의 양 끝점에서 호를 겹치도록 그린다."
  anime({
  targets: arc,
  strokeDashoffset: [445, 222.5],
  easing: 'easeInOutCubic',
  duration: 1000,
  loop: 1}
  );
  arcIs = true;
}

function drawDot() {
  speedwagon.innerText="호가 겹친 부분에 점을 찍는다."
  anime({
  targets: dot,
  r: [5, 3],
  opacity: [0, 1],
  easing: 'easeInOutCirc',
  duration: 1000,
  loop: 1}
  );
  dotIs = true;
}

function drawLine() {
  speedwagon.innerText="점C와 점D를 연결하여 선을 긋는다."
  anime({
  targets: line,
  opacity: [0, 1],
  easing: 'easeInOutCirc',
  duration: 0,
  loop: 1});
  anime({
    targets: line,
    y2: [0, 160],
    easing: 'easeInOutCirc',
    duration: 1000,
    loop: 1}
    );
  lineIs = true;
}

function drawR() {
  speedwagon.innerText=""
  anime({
  targets: rSide,
  opacity: [0, 1],
  easing: 'easeInOutCirc',
  duration: 0,
  loop: 1});
  anime({
    targets: rSide,
    strokeDashoffset: [100, 0],
    easing: 'easeInOutCirc',
    duration: 1000,
    loop: 1}
    );
  rSideIs = true;
}


function gridOn() {
  anime({
    targets: grid,
    opacity: 1,
    easing: 'easeInOutSine',
    duration: 500,
    loop: 1}
    );
}

function gridOff() {
  anime({
    targets: grid,
    opacity: 0,
    easing: 'easeInOutSine',
    duration: 500,
    loop: 1}
    );
}

//#endregion


//#region undraw
function undrawArc() {
  speedwagon.innerText=""
  anime({
  targets: arc,
  strokeDashoffset: [222.5, 445],
  easing: 'easeInOutCubic',
  duration: 1000,
  loop: 1}
  );
  arcIs = false;
}

function undrawDot() {
  speedwagon.innerText="선분AB의 양 끝점에서 호를 겹치도록 그린다."
  anime({
  targets: dot,
  r: [3, 5],
  opacity: [1, 0],
  easing: 'easeInOutCirc',
  duration: 1000,
  loop: 1}
  );
  dotIs = false;
}

function undrawLine() {
  speedwagon.innerText="호가 겹친 부분에 점을 찍는다."
  anime({
    targets: line,
    y2: [160, 0],
    opacity: [1, 0],
    easing: 'easeInOutCirc',
    duration: 1000,
    loop: 1}
    );
  lineIs = false;
}

function undrawR() {
  speedwagon.innerText="점C와 점D를 연결하여 선을 긎는다."
  anime({
    targets: rSide,
    strokeDashoffset: [0, 100],
    opacity: [1, 0],
    easing: 'easeInOutCirc',
    duration: 1000,
    loop: 1}
    );
  rSideIs = false;
}


//#endregion


//#region bLine
/** bLineP1 */
function bordicLine(tar) {
  target = document.querySelectorAll(tar);
  anime({
    targets: target,
    strokeWidth: [2, 4],
    easing: 'easeInOutCubic',
    duration: 500,
    loop: 1}
    );
  anime({
    targets: target,
    strokeWidth: [4, 2],
    easing: 'easeInOutCubic',
    duration: 500,
    loop: 1}
  );
}
/** bLineP3 */
function bordicLine(tar1, tar2, tar3) {
  target = [document.querySelectorAll(tar1), document.querySelectorAll(tar2), document.querySelectorAll(tar3)];
  anime({
    targets: target,
    strokeWidth: [2, 4],
    easing: 'easeInOutCubic',
    duration: 500,
    loop: 1}
    );
  anime({
    targets: target,
    strokeWidth: [4, 2],
    easing: 'easeInOutCubic',
    duration: 500,
    loop: 1}
  );
}
/** bLineP4 */
function bordicLine(tar1, tar2, tar3, tar4) {
  target = [document.querySelectorAll(tar1), 
    document.querySelectorAll(tar2), 
    document.querySelectorAll(tar3), 
    document.querySelectorAll(tar4)];
  anime({
    targets: target,
    strokeWidth: [2, 4],
    easing: 'easeInOutCubic',
    duration: 500,
    loop: 1}
    );
  anime({
    targets: target,
    strokeWidth: [4, 2],
    easing: 'easeInOutCubic',
    duration: 500,
    loop: 1}
  );
}
//#endregion


//#region onclickFuncs
document.querySelector('#drawArc').onclick = function(){
  if(arcIs == true) {
    undrawArc();
    
  } else {
    document.getElementById('arc1').style.visibility = "visible";
    document.getElementById('arc2').style.visibility = "visible";
    drawArc();
  }
};

// stroke-dashoffset: 0;

document.querySelector('#drawDot').onclick = function(){
  if(dotIs == true) {
    undrawDot();
  } else {
    if(arcIs == false) {
      return;
    } else {
      drawDot();
    }
  }
};


document.querySelector('#drawLine').onclick = function(){
  if(lineIs == true) {
    undrawLine();
  } else {
    if(dotIs == false) {
      return;
    } else {
      drawLine();
    }
  }
};

  
document.querySelector('#drawR').onclick = function(){
  if(rSideIs == true) {
    undrawR();
  } else {
    if(lineIs == false) {
      return;
    } else {
      drawR();
    }
  }    
  };

// document.querySelector('.switch').onclick = function(){
//   if(gridIs == true) {gridOff; return;}
//   gridOn();};

  document.querySelector('.switch').onclick = function(){
    let gridIs = document.querySelector("#gridTF").checked;
    if(gridIs == false) {
      gridOff();
      gridIs = true;
    } else {
      gridOn();
      gridIs = false;
    }
  };
//#endregion

