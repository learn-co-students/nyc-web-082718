document.addEventListener('DOMContentLoaded', () => {
  const controller = new DomController()
  const pokeAdapter = new Adapter('http://localhost:3000/pokemon')

  pokeAdapter.getIndex()
    .then(response => {
      console.log('RESPONSE FROM INITIAL FETCH IS: ', response)
      if (response.ok) { //is the HTTP status code < 400?
        return response.json()
      } else {
        throw new Error('Something went wrong!')
      }
    })
    .then((pokeJSONData) => {
      pokeJSONData.forEach(pokemonObject => new Pokemon(pokemonObject))
      const pokeHTMLString = Pokemon.renderAllPokemon()
      controller.addPokemonToDom(pokeHTMLString)
    })
    .catch(error => console.error(error))
})
