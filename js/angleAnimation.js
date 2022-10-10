// anime({
//   targets: "pth",
//   d: point,
//   easing: "easeInOutQuad",
//   direction: "alternate",
//   loop: true,
// });


//#region bool V
let arc1Is = false;
let dot1Is = false;
let arc2Is = false;
let dot2Is = false;
let lineIs = false;
let rSideIs = false;
//#endregion


//#region getting Es
let arc1 = document.querySelectorAll(".arc1");
let dot1 = document.querySelectorAll(".dot1");
let arc2 = document.querySelectorAll(".arc2");
let dot2 = document.querySelectorAll(".dot2");
let line = document.querySelectorAll(".line");
let grid = document.querySelectorAll(".grid");
let rSide = document.querySelectorAll(".rSide");
let speedwagon = document.getElementById("speedwagon");
//#endregion


//#region draw

function drawArc1() {
  speedwagon.innerText="점A에서 적당한 크기의 호를 그린다."
  anime({
  targets: arc1,
  strokeDashoffset: [630, 450],
  easing: 'easeInOutCubic',
  duration: 1000,
  loop: 1}
  );
  arc1Is = true;
}

function drawDot1() {
  speedwagon.innerText="호와 두 선분이 겹친 부분에 점을 찍는다."
  anime({
  targets: dot1,
  r: [5, 3],
  opacity: [0, 1],
  easing: 'easeInOutCirc',
  duration: 1000,
  loop: 1}
  );
  dot1Is = true;
}

function drawArc2() {
  speedwagon.innerText="점B와 점C에서 각 안쪽으로 호를 그린다."
  anime({
  targets: arc2,
  strokeDashoffset: [315, 200],
  easing: 'easeInOutCubic',
  duration: 1000,
  loop: 1}
  );
  arc2Is = true;
}

function drawDot2() {
  speedwagon.innerText="호가 겹친 부분에 점을 찍는다."
  anime({
  targets: dot2,
  r: [5, 3],
  opacity: [0, 1],
  easing: 'easeInOutCirc',
  duration: 1000,
  loop: 1}
  );
  dot2Is = true;
}

function drawLine() {
  speedwagon.innerText="점A와 점D를 연결하여 선을 긋는다."
  anime({
    targets: line,
    strokeDashoffset: [126, 0],
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
    strokeDashoffset: [133, 0],
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
function undrawArc1() {
  speedwagon.innerText="각의 이등분선 작도"
  anime({
  targets: arc1,
  strokeDashoffset: [450, 630],
  easing: 'easeInOutCubic',
  duration: 1000,
  loop: 1}
  );
  arc1Is = false;
}

function undrawDot1() {
  speedwagon.innerText="점A에서 적당한 크기의 호를 그린다."
  anime({
  targets: dot1,
  r: [3, 5],
  opacity: [1, 0],
  easing: 'easeInOutCirc',
  duration: 1000,
  loop: 1}
  );
  dot1Is = false;
}

function undrawArc2() {
  speedwagon.innerText="호와 두 선분이 겹친 부분에 점을 찍는다."
  anime({
  targets: arc2,
  strokeDashoffset: [200, 315],
  easing: 'easeInOutCubic',
  duration: 1000,
  loop: 1}
  );
  arc2Is = false;
}

function undrawDot2() {
  speedwagon.innerText="점B와 점C에서 각 안쪽으로 호를 그린다."
  anime({
  targets: dot2,
  r: [3, 5],
  opacity: [1, 0],
  easing: 'easeInOutCirc',
  duration: 1000,
  loop: 1}
  );
  dot2Is = false;
}

function undrawLine() {
  speedwagon.innerText="호가 겹친 부분에 점을 찍는다."
  anime({
    targets: line,
    strokeDashoffset: [0, 126],
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
    strokeDashoffset: [0, 133],
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

/** bLineP2 */
function bordicLine(tar1, tar2) {
  target = [document.querySelectorAll(tar1), document.querySelectorAll(tar2)];
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
document.querySelector('#drawArc1').onclick = function(){
  if(arc1Is == true) {
    undrawArc1();
    
  } else {
    document.getElementById('arc1').style.visibility = "visible";
    // document.getElementById('arc2').style.visibility = "visible";
    drawArc1();
  }
};

// stroke-dashoffset: 0;

document.querySelector('#drawDot1').onclick = function(){
  if(dot1Is == true) {
    undrawDot1();
  } else {
    if(arc1Is == false) {
      return;
    } else {
      drawDot1();
    }
  }
};

document.querySelector('#drawArc2').onclick = function(){
  if(arc2Is == true) {
    undrawArc2();
    
  } else {
    if(dot1Is == false) {
      return;
    } else {
      document.getElementById('arc2').style.visibility = "visible";
      // document.getElementById('arc2').style.visibility = "visible";
      drawArc2();
    }
  }
};

document.querySelector('#drawDot2').onclick = function(){
  if(dot2Is == true) {
    undrawDot2();
  } else {
    if(arc2Is == false) {
      return;
    } else {
      drawDot2();
    }
  }
};

document.querySelector('#drawLine').onclick = function(){
  if(lineIs == true) {
    undrawLine();
  } else {
    if(dot2Is == false) {
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

