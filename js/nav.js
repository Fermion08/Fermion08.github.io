function myMove() {
  var elem = document.getElementById("home");
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.width = pos + "px";
      elem.style.height = pos + "px";
    }
  }
}

/*const inner = document.querySelector(".inner");
const section = document.querySelector("main");

window.onscroll = function() {
  let value = window.pageYOffset / section.offsetTop + 1;
  inner.style.transform = `scale(${value})`;
};


$(function(){
  
  var $window = $(window);    //Window object
  
  var scrollTime = 1.2;     //Scroll time
  var scrollDistance = 170;   //Distance. Use smaller value for shorter scroll and greater value for longer scroll
    
  $window.on("mousewheel DOMMouseScroll", function(event){
    
    event.preventDefault(); 
                    
    var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta*scrollDistance);
      
    TweenMax.to($window, scrollTime, {
      scrollTo : { y: finalScroll, autoKill:true },
        ease: Power1.easeOut, //For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
        autoKill: true,
        overwrite: 5              
      });
          
  });*/
