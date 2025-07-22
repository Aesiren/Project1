import { getRandom, getByName, getById } from "./apiCall.js";
import { pokeClass } from "./pokeClass.js";
import { viewLoad, viewRandom } from "./view.js";



var btnStart = document.querySelector("#starting");
var btnLegend = document.querySelector("#legend");
var btnRandom = document.querySelector("#random");
var btnMythic = document.querySelector("#mythic");

btnStart.addEventListener("click", () => {
  window.location.href = "../Pages/Starter.html";
})

btnLegend.addEventListener("click", () => {
  window.location.href = "../Pages/Legendary.html";
})

btnRandom.addEventListener("click", () => {
  //document.location.href = "View_Pokemon.html";
  viewPage(null);

})

btnMythic.addEventListener("click", () => {
  window.location.href = "../Pages/Mythic.html";
})


async function setRandom() {
  let randomData = await getRandom();
  //console.log("data sent:", randomData);
  var randomPokemon = new pokeClass(randomData);
  //console.log("got random: ", randomPokemon);
  return randomPokemon;
}

async function setByName(name) {
  let data = await getByName(name);
  let namedPokemon = new pokeClass(data);
  return namedPokemon;
}



function viewPage(dataToPass) {
  //window.location.href = `../Pages/View_Pokemon.html?data=${data}`;
  if (dataToPass === null) {
    window.location.href = `../Pages/View_Pokemon.html`
    //document.location.href = "View_Pokemon.html";
    //viewRandom();
  } else {
    window.location.href = `../Pages/View_Pokemon.html?data=${dataToPass}`;
    viewLoad(dataToPass);

  }


}


export { setRandom, viewPage, setByName };