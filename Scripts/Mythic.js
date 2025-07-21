import { setByName } from "./links.js";

var boxElements = document.querySelectorAll("gridstart");


window.onload = function () {
  onLoad();
  console.log("Page loaded");
}

async function onLoad() {
  var mythicArray = [
    "Mew", "Celebi", "Jirachi", "deoxys-normal", "Phione",
    "Manaphy", "Darkrai", "shaymin-land", "Arceus", "Victini",
    "keldeo-ordinary", "meloetta-aria", "Genesect", "Diancie", "Hoopa",
    "Volcanion", "Magearna", "Marshadow", "Zeraora", "Meltan",
    "Melmetal", "Zarude", "Pecharunt"
  ];

  for (let x = 0; x < mythicArray.length; x++) {
    var data = await setByName(mythicArray[x]);
    document.getElementById(`box${x}`).innerHTML = `${data.name}<br><img src="${data.sprite}" height="192px" width="192px"></img>`
  }

}


