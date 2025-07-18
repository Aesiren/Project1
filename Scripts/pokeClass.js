class pokeClass {
  constructor(rawData) {
    this.baseXP = rawData.base_experience;
    this.height = rawData.height;
    this.id = rawData.id;
    this.moves = rawData.moves;
    this.name = rawData.name;
    this.sprite = rawData.sprites["front_default"];
    this.stats = rawData.stats;
    this.weight = rawData.weight;

  }
}

export { pokeClass };