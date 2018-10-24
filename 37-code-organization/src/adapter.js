class Adapter {
  static getAllPokemon() {
    return fetch('http://localhost:3000/pokemon', {
      method: 'GET'
    })
  }

  static createNewPokemon(newPokeDetailsObject) {
    /* {
    name: 'bulbasaur',
    sprites: {
      front: 'frontimgurl',
      back: 'backimgurl'
    }
  } */
    return fetch(Adapter.pokeEndpoint, {
      method: 'POST',
      headers: Adapter.headers,
      body: JSON.stringify(newPokeDetailsObject)
    })
  }
}

Adapter.headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

Adapter.pokeEndpoint = 'http://localhost:3000/pokemon'
