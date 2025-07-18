import { getRandom, getByName, getAll } from "./apiCall.js";
import { pokeClass } from "./pokeClass.js";
import { viewLoad } from "./view.js";



var btnStart = document.querySelector("#starting");
var btnLegend = document.querySelector("#legend");
var btnRandom = document.querySelector("#random");
var btnMythic = document.querySelector("#mythic");

btnStart.addEventListener("click", () => {
  getStart();
})

btnLegend.addEventListener("click", () => {
  getLegend();
})

btnRandom.addEventListener("click", () => {
  viewPage(setRandom());

})

btnMythic.addEventListener("click", () => {
  getMythic();
})

async function getStart() {
  var starterArray = {
    gen1: [["Bulbasaur", "Squirtle", "Charmander", "Pikachu"], []],
    gen2: [["Chikorita", "Cyndaquil", "Totodile"], []],
    gen3: [["Treecko", "Torchic", "Mudkip"], []],
    gen4: [["Turtwig", "Chimchar", "Piplup"], []],
    gen5: [["Snivy", "Tepig", "Oshawott"], []],
    gen6: [["Chespin", "Fennekin", "Froakie"], []],
    gen7: [["Rowlet", "Litten", "Popplio"], []],
    gen8: [["Grooky", "Scorbunny", "Sobble"], []]
  }


}

async function setRandom() {
  let randomData = await getRandom();
  //console.log("data sent:", randomData);
  var randomPokemon = new pokeClass(randomData);
  //console.log("got random: ", randomPokemon);
  return randomPokemon;
}

async function getLegend() {

  var legendArray = [['Mewtwo', 'Lugia', "Ho-Oh", "Kyogre", "Groudon", "Rayquaza",
    "Dialga", "Palkia", "Giratina", "Reshiram", "Zekrom", "Kyurem", "Xerneas",
    "Yveltal", "Zygarde", "Cosmog", "Cosmoem", "Solgaleo", "Lunala",
    "Necrozma", "Zacian", "Zamazenta", "Eternatus", "Calyrex", "Koraidon",
    "Miraidon", "Terapagos"], []]


}

async function getMythic() {

  var mythicArray = [[
    "Mew", "Celebi", "Jirachi", "Deoxys", "Phione", "Manaphry", "Darkrai", "Shaymin", "Arceus",
    "Victini", "Keldeo", "Meloetta", "Genesect", "Diancie", "Hoopa", "Volcanion", "Magearna",
    "Marshadow", "Zeraora", "Meltan", "Melmetal", "Zarude", "Pecharunt"
  ], []]
}

function viewPage(dataToPass) {
  viewLoad(dataToPass);
  window.location = "View_Pokemon.html";
}


export { getStart, setRandom, getLegend, getMythic };