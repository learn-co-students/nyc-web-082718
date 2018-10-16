document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/pokemon', {
    method: 'GET'
  }) //defaults to GET request
    .then(function(response) {
      console.log('%c RESPONSE FROM FETCH IS: ', 'color: goldenrod', response)
      return response.json() //parse the JSON from the response object
    })
    .then(function(parsedJSONData) {
      // console.table(parsedJSONData)
    })

    const newPokemonForm = document.getElementById('create-new-pokemon')
    const newPokemonNameInput = document.getElementById('pokemon-name-input')
    const pokemonContainer = document.getElementById('pokemon-container')

    const deleteBulbasaurButton = document.getElementById('delete-bulbasaur')
    deleteBulbasaurButton.addEventListener('click', function(event) {
      fetch('http://localhost:3000/pokemon/208', {
        method: 'DELETE'
      }).then(r => r.json()).then(data => console.log(data))
    })

    newPokemonForm.addEventListener('submit', function(event) {
      event.preventDefault() //stop the form from POSTING
      // event.target is teh FORM
      // form has some children, one of which is the input field
      // we can querySelector from the form and find that child by ID
      const newPokemonName = event.target.querySelector('#pokemon-name-input').value
      const newPokemonFrontSprite = event.target.querySelector('#pokemon-front-img').value
      const newPokemonBackSprite = event.target.querySelector('#pokemon-back-img').value
      console.log(newPokemonNameInput.value)
      // i need to tell the server to create a new pokemon
      // i need to send an HTTP POST request
      fetch('http://localhost:3000/pokemon', {
        method: 'POST',//send an HTTP POST request
        headers: { //data about our request; metadata
          'Accept': 'application/json',//i (the client/browser) will ACCEPT json as a response from the server
          'Content-Type': 'application/json'// i (the client/browser) am SENDING the server JSON
        },
        body: JSON.stringify({ //we are sending you the following JSON data; our rails controller will see this in the params
          name: newPokemonName, //this object must be turned into JSON
          sprites: {
            front: newPokemonFrontSprite,
            back: newPokemonBackSprite
          }
        })
      })
      .then(function(response) {
        console.log(response)
        return response.json()
      })
      .then(function(parsedJSONData) {
        pokemonContainer.innerHTML = `<p>${parsedJSONData.name}</p><img src="${parsedJSONData.sprites.front}">`
        console.log(parsedJSONData)
      })

    })
})











//
