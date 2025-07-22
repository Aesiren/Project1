import { setRandom, viewPage } from "./links.js";
//import { pokeClass } from "./pokeClass.js";

var gridTracker = document.querySelectorAll(".grid");

// document.addEventListener("DOMContentLoaded", () => {
//   setTimeout(() => {
//     hideLoader();
//     showContent();
//   }, 3000)


// });



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
  showContent();

}


function showContent() {
  var loader = document.getElementById("loader");
  loader.style.display = "none";
  var content = document.getElementById("main");
  content.classList.remove("hidden");
  content.classList.add("main");
  console.log("loaded")
}