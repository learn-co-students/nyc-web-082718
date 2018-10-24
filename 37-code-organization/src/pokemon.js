class Pokemon {
  constructor(pokemonObject) {
    this.id = pokemonObject.id
    this.name = pokemonObject.name
    this.sprites = pokemonObject.sprites
    Pokemon.all.push(this) //this will refer to the newly created instance/object
  }

  static renderAllPokemon(pokemonToRender=Pokemon.all) {
    return pokemonToRender.map(pokeInstance => pokeInstance.renderSinglePokemon()).join('') //turn the array of strings into a single string
  }

  static filterPokemonBasedOnSearchTerm(searchTerm) {
    return Pokemon.all.filter(/*FUNCTION*/ pokeInstance => {
      // does this pokemon's name include the search term
      return pokeInstance.name.includes(searchTerm)
    })
  }

  renderSinglePokemon() { //create an HTML string for a SINGLE pokemon card
    // pikachu.render()
    return (`
      <div class="pokemon-container">
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${this.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img data-id="${this.id}" data-action="flip" class="toggle-sprite" src="${this.sprites.front}">
          </div>
        </div>
      </div>
    </div>
    `)
  }
}

// typeof Pokemon -> 'function'
// Pokemon is a function object
// i can store key/value pairs on this function object

Pokemon.all = [] //setting a key on the function object
