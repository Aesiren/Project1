import { setRandom } from "./links.js";


var newButton = document.getElementById("newGame");
var boxes = document.querySelectorAll(".match");
var matchDeck = [];
var checkDeck = [];
var pokeDeck = [];
var guess1 = false;
var index1;
var guess2 = false;
var index2;
var score;
var internalID;
//console.log(boxes);

newButton.addEventListener("click", () => {
  newGame();
})

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    flip(index);
  })
})

async function newGame() {
  //get random pokemon, set to deck array
  getDeck();
  setCards();
  score = 0;
  document.getElementById("winner").innerHTML = "";
  document.querySelector("#timer").innerHTML = `Match!`;
  resetGuess();
  //startTime = new Date();
  timeStart();

}


async function getDeck() {
  matchDeck = [];
  pokeDeck = []

  for (let x = 0; x < 6; x++) {
    pokeDeck[x] = await setRandom();
  }
  console.log(pokeDeck);
  //set each pair
  for (let x = 0; x < 6; x++) {
    //console.log("Starting pair ", x);
    var pair1 = false;
    var pair2 = false;
    var count1 = 0;
    var count2 = 0;
    while (!pair1) {
      var position = getRandom();
      if (matchDeck[position] === undefined) {
        matchDeck[position] = pokeDeck[x];
        pair1 = true;
        //console.log("placed first card")
      } else {
        count1++;
      }

      if (count1 > 30) {
        console.log("deck incomplete");
        break;
      }
    }

    while (!pair2) {
      var position = getRandom();
      if (matchDeck[position] === undefined) {
        matchDeck[position] = pokeDeck[x];
        pair2 = true;
        //console.log("placed second card")
      } else {
        count2++;
      }

      if (count2 > 30) {
        console.log("deck incomplete");
        break;
      }
    }


    console.log("pair " + x + " complete");

  }

  for (let x = 0; x < 12; x++) {
    checkDeck[x] = false;
  }
  console.log("deck is: ", matchDeck);
}

function getRandom() {
  var randomNum = Math.floor(Math.random() * (12));
  //console.log(randomNum);
  return randomNum;


}

function setCards() {
  for (let x = 0; x < 12; x++) {
    document.getElementById(x).innerHTML = `<img src='../images/question.jpg'></img>`
  }

}

function flip(index) {
  console.log(index);
  document.getElementById(index).innerHTML = `<img src=${matchDeck[index].sprite}></img>`;
  setGuess(index);
}

function setGuess(index) {

  if (!guess1 && !guess2) {
    guess1 = true;
    index1 = index;
  } else if (!guess2) {
    guess2 = true;
    index2 = index;
  }

  if (guess1 && guess2) {
    if (matchDeck[index1] === matchDeck[index2]) {
      addScore()
    } else {
      //resetGuess();
      Timer(1);
      //reset(index1, index2);
    }
  }
  console.log("guess status: ", guess1, guess2)
}

function addScore() {
  score += 1;
  document.getElementById("score").innerHTML = score;
  checkDeck[index1] = true;
  checkDeck[index2] = true;

  document.getElementById(index1).innerHTML = `<img src="../images/check.jpg"></img>`;
  document.getElementById(index2).innerHTML = `<img src="../images/check.jpg"></img>`;


  var check = true;
  for (let x = 0; x < 12; x++) {
    if (!checkDeck[x]) {
      check = false;
    }
  }

  if (check) {
    winGame();
  }

  resetGuess();
  resetIndex();
}

function reset() {
  document.getElementById(index1).innerHTML = `<img src="../images/question.jpg"></img>`;
  document.getElementById(index2).innerHTML = `<img src="../images/question.jpg"></img>`;
  resetIndex();
  resetGuess();
}

function resetIndex() {
  index1 = undefined;
  index2 = undefined;
}
function resetGuess() {

  guess1 = false;
  guess2 = false;

}

function Timer(time) {
  var intervalID = setInterval(function () {
    if (time === 0) {
      clearInterval(intervalID);
      reset();
      document.querySelector("#timer").innerHTML = `Match!`
    } else {
      time -= 1;
      document.querySelector("#timer").innerHTML = `Next Guess in ${time} seconds`;
    }
  }, 1000)
}

function winGame() {
  timeEnd();
  document.getElementById("winner").innerHTML = "You Win!"
}



function timeStart() {
  var time = 0;
  document.getElementById("timeSpent").innerHTML = "0";
  internalID = setInterval(function () {
    time += 1;
    document.getElementById("timeSpent").innerHTML = time;
  }, 1000);

}

function timeEnd() {
  clearInterval(internalID);
}