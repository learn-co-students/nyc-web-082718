document.addEventListener('DOMContentLoaded', () => {

  Adapter.getAllPokemon() //will return a promise that i can call .then on
    .then(response => {
      console.log('RESPONSE FROM INITIAL FETCH IS: ', response)
      if (response.ok) { //is the HTTP status code < 400?
        return response.json()
      } else {
        throw new Error('Something went wrong!')
      }
    })
    .then(/*FUNCTION*/(pokeJSONData) => { //pokeJSONData is the returned parsed JSON from our previous .then
      // pokeJSONData is an array of objects
      // when i get the data back from the server, I will create new JS pokemon instances/objects with that data
      pokeJSONData.forEach((pokemonObject) => {
        new Pokemon(pokemonObject)
      }) //end of forEach
      document.getElementById('pokemon-container').innerHTML = Pokemon.renderAllPokemon() //add this large string of HTML to the DOM
    })
    .catch(error => console.error(error))


  document.getElementById('pokemon-container').addEventListener('click', event => {
    if (event.target.dataset.action === 'flip') {
      const targetPoke = POKEMON.find(pokeObj => pokeObj.id == event.target.dataset.id)
      if (event.target.src === targetPoke.sprites.front) {
        event.target.src = targetPoke.sprites.back
      } else {
        event.target.src = targetPoke.sprites.front
      }
    }
  })

  document.getElementById('pokemon-search-form').addEventListener('input', event => {
    const searchTerm = event.target.value.trim().toLowerCase()
    console.log(searchTerm)
    const filteredPokemon = Pokemon.filterPokemonBasedOnSearchTerm(searchTerm)
    console.log(filteredPokemon)
    document.getElementById('pokemon-container').innerHTML = Pokemon.renderAllPokemon(filteredPokemon)
    // filter pokemon based on search term
  })
})
