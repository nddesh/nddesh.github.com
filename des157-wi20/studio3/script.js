(function(){
    "use strict";

    const startGame = document.getElementById("startgame");
    const gameControl = document.getElementById("gamecontrol");
    const game = document.getElementById("game");
    const score = document.getElementById("score");
    const actionArea = document.getElementById("actions");

    const gameData = {
        cards: ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png", "09.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png", "19.png", "20.png", "21.png", "22.png", "23.png", "24.png", "25.png", "26.png", "27.png", "28.png", "29.png", "30.png", "31.png", "32.png", "33.png", "34.png", "35.png", "36.png", "37.png", "38.png", "39.png", "40.png", "41.png", "42.png", "43.png", "44.png", "45.png", "46.png", "47.png", "48.png", "49.png", "50.png", "51.png", "52.png"],

        players: ["player"],
        cardsSum: 0,
        gameEnd: 0
    }

    startGame.addEventListener("click", function(){
        gameControl.innerHTML = `<h2>Game On!</h2>`;
        gameControl.innerHTML += `<button id="quit">Quit Game?</button>`;
        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
        });
        hitMe();
    });

    function hitMe() {
      actionArea.innerHTML = '<button id="hit">Hit me</button>';
      document.getElementById('hit').addEventListener("click", function(){
          playerCards();
      });
    }

    function shuffleCards() {
      actionArea.innerHTML = '';
      gameData.cardsIndex = Math.ceil(Math.random()*51);
      console.log("index:" + gameData.cardsIndex);
    }

    function playerCards() {
      actionArea.innerHTML = '';
      shuffleCards();
      player.innerHTML = `<p>Player cards</p>`;
      var img = document.createElement('img');
      img.src = `images/${gameData.cards[gameData.cardsIndex]}`;
      document.getElementById("player").appendChild(img);
     gameData.cardsSum = calcSum();
     console.log("sum:" + gameData.cardsSum);
     showCurrentScore();
     gameData.gameEnd += 1;
     checkWinningCondition();
     if (gameData.gameEnd < 3) {
        hitMe();
     }
    }

    function calcSum() {
      if (gameData.cardsIndex == 0 || gameData.cardsIndex == 13 || gameData.cardsIndex == 26 || gameData.cardsIndex == 39) {
        gameData.cardsSum += 1;
      }
      else if (gameData.cardsIndex == 1 || gameData.cardsIndex == 14 || gameData.cardsIndex == 27 || gameData.cardsIndex == 40) {
        gameData.cardsSum += 2;
      }
      else if (gameData.cardsIndex == 2 || gameData.cardsIndex == 15 || gameData.cardsIndex == 28 || gameData.cardsIndex == 41) {
        gameData.cardsSum += 3;
      }
      else if (gameData.cardsIndex == 3 || gameData.cardsIndex == 16 || gameData.cardsIndex == 29 || gameData.cardsIndex == 42) {
        gameData.cardsSum += 4;
      }
      else if (gameData.cardsIndex == 4 || gameData.cardsIndex == 17 || gameData.cardsIndex == 30 || gameData.cardsIndex == 43) {
        gameData.cardsSum += 5;
      }
      else if (gameData.cardsIndex == 5 || gameData.cardsIndex == 18 || gameData.cardsIndex == 31 || gameData.cardsIndex == 44) {
        gameData.cardsSum += 6;
      }
      else if (gameData.cardsIndex == 6 || gameData.cardsIndex == 19 || gameData.cardsIndex == 32 || gameData.cardsIndex == 45) {
        gameData.cardsSum += 7;
      }
      else if (gameData.cardsIndex == 7 || gameData.cardsIndex == 20 || gameData.cardsIndex == 33 || gameData.cardsIndex == 46) {
        gameData.cardsSum += 8;
      }
      else if (gameData.cardsIndex == 8 || gameData.cardsIndex == 21 || gameData.cardsIndex == 34 || gameData.cardsIndex == 47) {
        gameData.cardsSum += 9;
      }
      else if (gameData.cardsIndex == 9 || gameData.cardsIndex == 22 || gameData.cardsIndex == 35 || gameData.cardsIndex == 48) {
        gameData.cardsSum += 10;
      }
      else if (gameData.cardsIndex == 10 || gameData.cardsIndex == 23 || gameData.cardsIndex == 36 || gameData.cardsIndex == 49) {
        gameData.cardsSum += 11;
      }
      else if (gameData.cardsIndex == 11 || gameData.cardsIndex == 24 || gameData.cardsIndex == 37 || gameData.cardsIndex == 50) {
        gameData.cardsSum += 12;
      }
      else if (gameData.cardsIndex == 12 || gameData.cardsIndex == 25 || gameData.cardsIndex == 38 || gameData.cardsIndex == 51) {
        gameData.cardsSum += 13;
      }
      return gameData.cardsSum;
    }

    function checkWinningCondition() {
      if (gameData.gameEnd == 3) {
        if (gameData.cardsSum < 21) {
          score.innerHTML = `<h2>You win!</h2> <p>The score is currently <strong>: ${gameData.cardsSum}</strong>`;

          document.getElementById('quit').innerHTML = "Start a New Game?";
        }

        if (gameData.cardsSum >= 21) {
          score.innerHTML = `<h2>Game Over!   You lose!</h2> <p>The score is currently <strong>: ${gameData.cardsSum}</strong>`;

          document.getElementById('quit').innerHTML = "Start a New Game?";
        }
      }

      else if (gameData.cardsSum >= 21){
        score.innerHTML = `<h2>Game Over!   You lose!</h2> <p>The score is currently <strong>: ${gameData.cardsSum}</strong>`;

        document.getElementById('quit').innerHTML = "Start a New Game?";
      }
    }


    function showCurrentScore(){
        score.innerHTML = `<p>The score is currently <strong>: ${gameData.cardsSum}</strong>`
    }
  }());
