"use strict";

var e = document.querySelector(".header__button");
document.querySelectorAll(".navigation__link").forEach(function (e) {
  return [e.addEventListener("click", n)];
}), e.addEventListener("click", n);
var t = document.querySelector(".header");
var c = window.pageYOffset;
var l = t.offsetHeight;

function n() {
  !function (e) {
    var t = "true" === e.ariaExpanded;
    e.ariaExpanded = !t;
  }(e), document.body.classList.toggle("scroll-lock");
}

window.addEventListener("scroll", function () {
  c > l ? t.classList.add("header--light") : t.classList.remove("header--light");
  var e = window.pageYOffset;
  t.style.top = c > e ? "0" : "-".concat(l, "px"), c = e;
}), function (e) {
  var t = e.querySelectorAll(".carousel__slide"),
      c = e.querySelectorAll(".carousel__control");
  var l = 0;

  function n(e) {
    t[l].classList.remove("carousel__slide--current"), t[e].classList.add("carousel__slide--current"), l = e;
  }

  c[0].addEventListener("click", function (e) {
    e.preventDefault(), n(0 === l ? t.length - 1 : l - 1);
  }), c[1].addEventListener("click", function (e) {
    e.preventDefault(), n(l === t.length - 1 ? 0 : l + 1);
  });
}(document.querySelector(".carousel"));