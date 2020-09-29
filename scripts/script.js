// JavaScript Document

var burger1 = document.querySelector('#burger1');
var burger2 = document.querySelector('#burger2');
var burger3 = document.querySelector('#burger3');
var burgermenu = document.querySelector('#burgermenu');
var burgermenuklap = document.querySelector('#menu');
var easter = document.querySelector('#easter');
var body = document.body;

function burgerMenuPress() {
  burger1.classList.toggle('burger1rot');
  burger2.classList.toggle('burger2rot');
  burger3.classList.toggle('burger3rot');
  burgermenuklap.classList.toggle('klapmenuopen');
}

function easterEgg() {
  body.classList.add('easter');

  setTimeout(function () {
    body.classList.remove('easter');
  },
  4000
);
}

burgermenu.addEventListener("click", burgerMenuPress);
easter.addEventListener("click", easterEgg);
