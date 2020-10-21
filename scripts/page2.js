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
var betalenButtonklik = document.querySelector('#betalen');
var betalenUlHeel = document.querySelector('#betalenUl');
var pijltjeImg = document.querySelector('#pijltje');
var gebruikenButtonklik = document.querySelector('#gebruiken');
var gebruikenUlHeel = document.querySelector('#gebruikenUl');
var pijltjeImg2 = document.querySelector('#pijltje2');
var luisterenButtonklik = document.querySelector('#luisteren');
var luisterenUlHeel = document.querySelector('#luisterenUl');
var pijltjeImg3 = document.querySelector('#pijltje3');
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

    if ( zoekenWoord == "tiny" || zoekenWoord == "Tiny") {
      body.classList.add("tiny");
    }
    else {
      body.classList.remove("tiny");
    }

  }

  function betalenPress() {
    betalenUlHeel.classList.toggle('uldicht');
    pijltjeImg.classList.toggle('pijlopen')
  }

  function gebruikenPress() {
    gebruikenUlHeel.classList.toggle('uldicht');
    pijltjeImg2.classList.toggle('pijlopen')
  }

  function luisterenPress() {
    luisterenUlHeel.classList.toggle('uldicht');
    pijltjeImg3.classList.toggle('pijlopen')
  }


zoekenInput.addEventListener("input", zoekenCheck);
betalenButtonklik.addEventListener("click", betalenPress);
gebruikenButtonklik.addEventListener("click", gebruikenPress);
luisterenButtonklik.addEventListener("click", luisterenPress);
