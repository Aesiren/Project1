import { getStart, setRandom, getLegend, getMythic } from "./links.js";
import { pokeClass } from "./pokeClass.js";


window.onload = function () {
  onLoad(null);
  console.log("Page loaded");
}

async function onLoad(data) {
  console.log("starting page load");
  var loadData = [];
  if (data != null) {
    data.forEach((ele) => {
      loadData.push(ele);
    })
  } else {
    for (let x = 0; x < 9; x++) {
      let newData = await setRandom();
      loadData.push(newData);
    }
  }
  console.log(loadData);
  setPage(loadData);

}

function setPage(data) {
  for (let x = 0; x < 9; x++) {
    document.getElementById(`box${x}`).innerHTML = `<img src="${data[x].sprite}" height="192px" width="192px">${data[x].name}</img>`
  }
}