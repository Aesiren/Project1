class pokeClass {
  construct(data) {
    this.baseXP = data["base_experience"];
    this.height = data["height"];
    this.id = data["id"];
    this.moves = data["moves"];
    this.name = data["name"];
    this.sprite = data.sprites["front_default"];
    this.stats = data["stats"];
    this.weight = data["weight"];

  }


}