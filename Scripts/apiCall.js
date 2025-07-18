async function getRandom() {
  //generates a "random" number from 1 to 1302
  // then fetches the data for the specified pokemon ID
  var random = Math.floor(Math.random() * (1302 - 1) + 1);

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`);
  const data = await res.json();
  return data;

  //data returned in JSON, but must be formatted for specific information

}

async function getById(id) {
  // fetches the data for the specified pokemon ID

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await res.json();
  return data;

  //data returned in JSON, but must be formatted for specific information

}

async function getByName(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  const data = await res.json();
  return data;
}

async function getAll(min, max) {
  //fetches all pokemon
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
  const data = await res.json();
  return data;

}

exports = { getRandom, getById, getByName, getAll };