import { setRandom, viewPage } from "./links.js";
//import { pokeClass } from "./pokeClass.js";

var gridTracker = document.querySelectorAll(".grid");

gridTracker.forEach((grid, index) => {
  grid.addEventListener("click", () => {
    var captured = grid.textContent;
    //console.log(captured);
    viewPage(captured);
  })
})

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
    document.getElementById(`box${x}`).innerHTML = `${data[x].name}<br><img src="${data[x].sprite}" height="192px" width="192px"></img>`
  }
}