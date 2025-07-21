import { setRandom } from "./links.js";

var pokeList;
var enteredAnswer;
var guessButton = document.querySelector("#guessButton");
var playerScore = 0;
var scoreTracker = document.querySelector("#playerScore");
var currentPokeName;
var currentPokeID;
var pokePageID = document.querySelector("#currentID");
var pokePageName = document.querySelector("#currentName");
var pokePicture;

window.onload = function () {
  NewGame();
  console.log("Page loaded");
};

guessButton.addEventListener("click", () => {

  console.log("guess button clicked");
  GetGuess();
  CheckGuess(enteredAnswer, currentPokeName);
  Timer(5);
})

function NewGame() {
  console.log("starting new game");
  GetRandom();
  document.querySelector("#guess").value = "";
  document.querySelector("#winMessage").innerHTML = "What's Your Guess?";


}

function ResetGame() {
  console.log("resetting page...");
  NewGame();

}


async function GetRandom() {

  pokeList = await setRandom();
  ApplyRandom();

}

function ApplyRandom() {
  console.log(pokeList);
  currentPokeID = pokeList.id;
  console.log("poke ID: ", currentPokeID);
  currentPokeName = pokeList.name;
  pokePicture = pokeList.sprite;
  console.log(pokePicture);
  document.querySelector("#currentID").innerHTML = currentPokeID;
  document.querySelector("#currentName").innerHTML = "??";
  document.querySelector("#currentPic").src = pokePicture;
}

function GetGuess() {

  enteredAnswer = document.querySelector("#guess").value;
  console.log("getting guess: ", enteredAnswer);
}

function CheckGuess(guess, answer) {
  console.log("Checking answer...")
  RevealPoke();
  if (guess === answer) {
    console.log("answer correct", guess, answer);
    AddScore();
    Congrats();
  } else {
    console.log("answer wrong", guess, answer);
    TooBad();
  }
  //return correct;
}

function RevealPoke() {
  document.querySelector("#currentName").innerHTML = currentPokeName;
}



function AddScore() {
  console.log("adding to score");
  playerScore += 1;
  document.querySelector("#playerScore").innerHTML = playerScore;
}

function Congrats() {
  document.querySelector("#winMessage").innerHTML = "Correct!";
}

function TooBad() {
  document.querySelector("#winMessage").innerHTML = "Too Bad!";
}


function Timer(timer) {

  var intervalID = setInterval(function () {
    if (timer === 0) {
      clearInterval(intervalID);
      ResetGame();
    } else {
      timer -= 1;
      document.querySelector("#timer").innerHTML = `New Game In: ${timer}`;
    }
  }, 1000)
}