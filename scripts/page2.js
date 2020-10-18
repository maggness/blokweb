var zoekenInput = document.querySelector('#zoeken');
var muziek = document.querySelector('#muziek');
var audio = document.querySelector('#audio');
var dvdAni = document.querySelector('#dvd');
var deLeukeDingenDiv = document.querySelector('#deLeukeDingen');
var burger1 = document.querySelector('#burger1');
var burger2 = document.querySelector('#burger2');
var burger3 = document.querySelector('#burger3');
var burgermenu = document.querySelector('#burgermenu');
var mainPage2 = document.querySelector('#page2');
var body = document.body

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

    if ( zoekenWoord == "do a barrel roll" || zoekenWoord == "Do a barrel roll" || zoekenWoord == "doabarrelroll" || zoekenWoord == "Doabarrelroll" ) {
      body.classList.add("starfoxBackground");
      mainPage2.classList.add("starfoxvoor");

      setTimeout(function () {
        mainPage2.classList.remove("starfoxvoor");
        mainPage2.classList.add("starfox");
      },
      8000
    );
    }
    else {
      body.classList.remove("starfoxBackground");
      mainPage2.classList.remove("starfoxvoor");
      mainPage2.classList.remove("starfox");
    }

  }


zoekenInput.addEventListener("input", zoekenCheck);
