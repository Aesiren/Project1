import { setByName } from "./links.js";

var boxElements = document.querySelectorAll("gridstart");


window.onload = function () {
  onLoad();
  console.log("Page loaded");
}

async function onLoad() {
  var legendArray = ['Mewtwo', 'Lugia', "Ho-Oh", "Kyogre", "Groudon",
    "Rayquaza", "Dialga", "Palkia", "giratina-altered", "Reshiram",
    "Zekrom", "Kyurem", "Xerneas", "Yveltal", "zygarde-50",
    "Cosmog", "Cosmoem", "Solgaleo", "Lunala", "Necrozma",
    "Zacian", "Zamazenta", "Eternatus", "Calyrex", "Koraidon",
    "Miraidon", "Terapagos"]

  for (let x = 0; x < legendArray.length; x++) {
    var data = await setByName(legendArray[x]);
    document.getElementById(`box${x}`).innerHTML = `${data.name}<br><img src="${data.sprite}" height="192px" width="192px"></img>`
  }

}


