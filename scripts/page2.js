var zoekenInput = document.querySelector('#zoeken');
var muziek = document.querySelector('#muziek');
var audio = document.querySelector('#audio');
var dvdAni = document.querySelector('#dvd');
var deLeukeDingenDiv = document.querySelector('#deLeukeDingen');
var burger1 = document.querySelector('#burger1');
var burger2 = document.querySelector('#burger2');
var burger3 = document.querySelector('#burger3');

function zoekenCheck() {
    var zoekenWoord = zoekenInput.value ;

    if ( zoekenWoord == "dvd" ) {
      deLeukeDingenDiv.innerHTML = "<p id='dvd' class='dvd dvdAnimatie'>V</p>";
    }
    else {
      deLeukeDingenDiv.innerHTML = "";
    }

    if ( zoekenWoord == "star wars" ) {
      muziek.src = "sounds/fates.mp3";
      muziek.play();
      deLeukeDingenDiv.classList.add("starwars");
      burger1.classList.add("saberLinks");
      burger2.classList.add("saberStok");
      burger3.classList.add("saberRechts");

    } else {
      muziek.pause();
    }
  }


zoekenInput.addEventListener("input", zoekenCheck);
