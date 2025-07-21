import { setRandom } from "./links.js";


function viewLoad(data) {

  //location = "../Pages/View_Pokemon.html";

}

async function viewRandom() {
  //location = "../Pages/View_Pokemon.html";
  var randomPoke = await setRandom();
  console.log(randomPoke);
  setPage(randomPoke);
}

function setPage(data) {
  console.log(data);
  document.getElementById("pic").src = `<img src=${data.sprite}></img>`;
  document.getElementById("pokeId").innerHTML = data.id;
  document.getElementById("name").innerHTML = data.name;
  document.getElementById("baseXP").innerHTML = data.baseXP;
  document.getElementById("height").innerHTML = data.height;
  document.getElementById("weight").innerHTML = data.weight;
  document.getElementById("moves").innerHTML = data.moves;
}

export { viewLoad, viewRandom };