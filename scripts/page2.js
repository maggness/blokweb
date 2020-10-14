var zoekenInput = document.querySelector('#zoeken');
var muziek = document.querySelector('#muziek');
var audio = document.querySelector('#audio');

function zoekenCheck() {
    var zoekenWoord = zoekenInput.value ;

    if ( zoekenWoord == "doom" ) {
      muziek.play();
    }
    else {
      muziek.pause();
    }
  }

zoekenInput.addEventListener("input", zoekenCheck);
