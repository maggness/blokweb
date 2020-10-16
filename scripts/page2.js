var zoekenInput = document.querySelector('#zoeken');
var muziek = document.querySelector('#muziek');
var audio = document.querySelector('#audio');
var dvdAni = document.querySelector('#dvd');
var deLeukeDingenDiv = document.querySelector('#deLeukeDingen');
var burger1 = document.querySelector('#burger1');
var burger2 = document.querySelector('#burger2');
var burger3 = document.querySelector('#burger3');
var burgermenu = document.querySelector('#burgermenu');

function zoekenCheck() {
    var zoekenWoord = zoekenInput.value ;

    if ( zoekenWoord == "dvd" || zoekenWoord == "Dvd" || zoekenWoord == "DVD" ) {
      deLeukeDingenDiv.innerHTML = "<p id='dvd' class='dvd dvdAnimatie'>V</p>";
    }
    else {
      deLeukeDingenDiv.innerHTML = "";
    }

    if ( zoekenWoord == "star wars" || zoekenWoord == "Star wars" || zoekenWoord == "STAR WARS") {
      muziek.src = "sounds/dualfates.mp3";
      muziek.play();
      deLeukeDingenDiv.classList.add("starwars");
      burger1.classList.add("saberLinks");
      burger2.classList.add("saberStok");
      burger3.classList.add("saberRechts");

      setTimeout(function () {
        burgermenu.classList.add("zwaaien");
        deLeukeDingenDiv.classList.add("starwarsBackground");
      },
      22000
    );

    } else {
      muziek.pause();
      deLeukeDingenDiv.classList.remove("starwars");
      burger1.classList.remove("saberLinks");
      burger2.classList.remove("saberStok");
      burger3.classList.remove("saberRechts");
      burgermenu.classList.remove("zwaaien");
    }
  }


zoekenInput.addEventListener("input", zoekenCheck);
