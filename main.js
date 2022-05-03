"use strict";

const btnMenu = document.querySelector(".menu-bar");
const secret = document.querySelector(".secret-menu-sections");
const btnClose = document.querySelector(".sm-close-button");
const header = document.querySelector(".header");
const ahref = document.getElementsByTagName("a");
const logo1 = document.querySelector(".logo1");
const logo2 = document.querySelector(".logo2");

btnMenu.onclick = function (e) {
  secret.classList.add("active-mobile-menu");
};
btnClose.onclick = function (e) {
  secret.classList.remove("active-mobile-menu");
};

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 220) {
    header.style.background = "white";
    logo1.style.display = "none";
    logo2.style.display = "block";
    header.classList.add("black-menu-text");
  } else {
    header.style.background = "transparent";
    logo1.style.display = "block";
    logo2.style.display = "none";
    header.classList.remove("black-menu-text");
  }
});
