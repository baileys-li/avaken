const e=document.querySelector(".header__button");document.querySelectorAll(".navigation__link").forEach((e=>[e.addEventListener("click",n)])),e.addEventListener("click",n);const t=document.querySelector(".header");let c=window.pageYOffset;const l=t.offsetHeight;function n(){!function(e){const t="true"===e.ariaExpanded;e.ariaExpanded=!t}(e),document.body.classList.toggle("scroll-lock")}window.addEventListener("scroll",(()=>{c>l?t.classList.add("header--light"):t.classList.remove("header--light");const e=window.pageYOffset;t.style.top=c>e?"0":`-${l}px`,c=e})),function(e){const t=e.querySelectorAll(".carousel__slide"),c=e.querySelectorAll(".carousel__control");let l=0;function n(e){t[l].classList.remove("carousel__slide--current"),t[e].classList.add("carousel__slide--current"),l=e}c[0].addEventListener("click",(e=>{e.preventDefault(),n(0===l?t.length-1:l-1)})),c[1].addEventListener("click",(e=>{e.preventDefault(),n(l===t.length-1?0:l+1)}))}(document.querySelector(".carousel"));