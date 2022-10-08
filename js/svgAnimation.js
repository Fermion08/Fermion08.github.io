let point = "M 100 100 l20 0";

anime({
  targets: "path",
  d: point,
  easing: "easeInOutQuad",
  direction: "alternate",
  loop: true,
});
