import { } from "./links.js";






function viewLoad(data) {
  document.getElementById("pic").innerHTML = `<img src=${data.sprite}></img>`;
  document.getElementById("id").innerHTML = data.id;
  document.getElementById("name").innerHTML = data.name;
  document.getElementById("baseXP").innerHTML = data.baseXP;
  document.getElementById("height").innerHTML = data.height;
  document.getElementById("weight").innerHTML = data.weight;
  document.getElementById("moves").innerHTML = data.moves;
}

export { viewLoad };