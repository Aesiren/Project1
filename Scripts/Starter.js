import { setByName, viewPage } from "./links.js";

var boxElements = document.querySelectorAll(".gridstart");

boxElements.forEach((box, index) => {
  box.addEventListener("click", () => {
    var captured = box.textContent;
    //console.log(captured);
    viewPage(captured);
  })
})

window.onload = function () {
  onLoad();
  console.log("Page loaded");
}

async function onLoad() {
  var starterArray =
    ["Bulbasaur", "Squirtle", "Charmander", "Pikachu", "Chikorita", "Cyndaquil", "Totodile",
      "Treecko", "Torchic", "Mudkip", "Turtwig", "Chimchar", "Piplup", "Snivy", "Tepig", "Oshawott",
      "Chespin", "Fennekin", "Froakie", "Rowlet", "Litten", "Popplio", "Grookey", "Scorbunny", "Sobble",
      "Sprigatito", "Fuecoco", "Quaxly"];

  for (let x = 0; x < starterArray.length; x++) {
    var data = await setByName(starterArray[x]);
    document.getElementById(`box${x}`).innerHTML = `${data.name}<br><img src="${data.sprite}" height="192px" width="192px"></img>`
  }

}


