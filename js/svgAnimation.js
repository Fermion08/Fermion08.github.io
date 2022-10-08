let point = "M 10 80 C 50 10, 65 10, 95 800 S 150 150, 180 80";

anime({
  targets: "#li1",
  d: point,
  easing: "easeInOutQuad",
  direction: "alternate",
  loop: true,
});
