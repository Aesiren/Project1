import { setRandom, setByName } from "./links.js";


var parameters = new URLSearchParams(window.location.search);
const pokeName = parameters.get('data');

console.log(pokeName);
window.onload = function () {
  if (pokeName === null) {
    viewRandom();
  } else {
    viewLoad(pokeName);
  }



}

async function viewLoad(name) {
  var data = await setByName(name)

  setPage(data);
  //location = "../Pages/View_Pokemon.html";

}

async function viewRandom() {
  //location = "../Pages/View_Pokemon.html";
  var randomPoke = await setRandom();
  console.log(randomPoke);
  setPage(randomPoke);
}

function setPage(data) {
  //console.log(data);
  document.getElementById("pic").innerHTML = `<img src=${data.sprite} height="368px" width="368px" ></img>`;
  document.getElementById("pokeId").innerHTML = `ID: ${data.id}`;
  document.getElementById("name").innerHTML = `Name: ${data.name}`;
  document.getElementById("baseXP").innerHTML = `Base XP: ${data.baseXP}`;
  document.getElementById("height").innerHTML = `Height: ${data.height}`;
  document.getElementById("weight").innerHTML = `Weight: ${data.weight}`;
  var moveList = document.createElement("ul");
  data.moves.forEach((elem) => {
    //document.getElementById("moves").innerHTML.append = elem.move.name;
    var moveItem = document.createElement("li");
    moveItem.innerText += elem.move.name;
    moveList.appendChild(moveItem);
  })
  document.getElementById("moves").appendChild(moveList);
  //  document.getElementById("moves").innerHTML = data.moves;
  showContent();
}


function showContent() {
  var loader = document.getElementById("loader");
  loader.style.display = "none";
  var content = document.getElementById("view_main");
  content.classList.remove("hidden");
  console.log("loaded")
}

export { viewLoad, viewRandom };