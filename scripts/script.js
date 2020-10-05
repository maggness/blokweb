// JavaScript Document

var burger1 = document.querySelector('#burger1');
var burger2 = document.querySelector('#burger2');
var burger3 = document.querySelector('#burger3');
var burgermenu = document.querySelector('#burgermenu');
var burgermenuklap = document.querySelector('#menu');
var easter = document.querySelector('#easter');
var body = document.body;

var bars = document.querySelector('#bars');
var deur1a = document.querySelector('#deur1a');
var deur1b = document.querySelector('#deur1b');
var deur2a = document.querySelector('#deur2a');
var deur2b = document.querySelector('#deur2b');


function burgerMenuPress() {
  burger1.classList.toggle('burger1rot');
  burger2.classList.toggle('burger2rot');
  burger3.classList.toggle('burger3rot');
  burgermenuklap.classList.toggle('klapmenuopen');
}

function easterEgg() {
  bars.classList.add('barsanimatie');
  deur1a.classList.add('deur1aanimatie');
  deur1b.classList.add('deur1banimatie');
  deur2a.classList.add('deur2aanimatie');
  deur2b.classList.add('deur2banimatie');

  setTimeout(function () {
    bars.classList.remove('barsanimatie');
    deur1a.classList.remove('deur1aanimatie');
    deur1b.classList.remove('deur1banimatie');
    deur2a.classList.remove('deur2aanimatie');
    deur2b.classList.remove('deur2banimatie');
  },
  8000
);
}

burgermenu.addEventListener("click", burgerMenuPress);
easter.addEventListener("click", easterEgg);
