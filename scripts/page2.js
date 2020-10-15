var zoekenInput = document.querySelector('#zoeken');
var muziek = document.querySelector('#muziek');
var audio = document.querySelector('#audio');
var dvdAni = document.querySelector('#dvd');

function zoekenCheck() {
    var zoekenWoord = zoekenInput.value ;

    if ( zoekenWoord == "doom" ) {
      muziek.play();
    }
    else {
      muziek.pause();
    }

    if ( zoekenWoord == "dvd" ) {
      dvdAni.classList.add('dvdAnimatie');
    }
    else {
      dvdAni.classList.remove('dvdAnimatie');
    }
  }

zoekenInput.addEventListener("input", zoekenCheck);
