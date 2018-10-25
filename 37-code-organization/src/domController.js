class DomController {
  constructor() { //dom controller owns the nodes it will manipulate
    this.searchInput = document.getElementById('pokemon-search-form')
    this.pokemonContainer = document.getElementById('pokemon-container')
    this.attachEventListeners() //start listening on our DOM nodes
  }

  attachEventListeners() {
    this.searchInput.addEventListener('input', this.handleSearch)
  }

  addPokemonToDom(pokemonHTML) {
    this.pokemonContainer.innerHTML = pokemonHTML
  }

  handleSearch(event) {
    // event.target -> input field
    const searchTerm = event.target.value.trim().toLowerCase() //sanitize user search query
    const filteredPokemon = Pokemon.filterPokemonBasedOnSearchTerm(searchTerm) //give us a subset of pokemon
    this.pokemonDivContainer.innerHTML = Pokemon.renderAllPokemon(filteredPokemon) //add that subset to the DOM
  }
}
