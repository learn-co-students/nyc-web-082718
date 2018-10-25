function searchInputHandler(event) {
  const searchTerm = event.target.value.trim().toLowerCase()
  console.log(searchTerm)
  const filteredPokemon = Pokemon.filterPokemonBasedOnSearchTerm(searchTerm)
  this.targetDiv.innerHTML = Pokemon.renderAllPokemon(filteredPokemon)
}
