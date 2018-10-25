class Adapter {
  constructor(endpoint) {
    // we are assuming a RESTful JSON API
    this.endpoint = endpoint,
    this.headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  getIndex() {
    return fetch(this.endpoint)
    // return fetch(this.endpoint, {
    //   method: 'GET'
    // })
  }

  createNewRecord(requestBody) {
    // { name: 'bulbasaur', sprites: {front: '', back: '' } }
    return fetch(this.endpoint, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(requestBody)
    })
  }

  updateRecord(updatedDetails, id) {
    return fetch(`${this.endpoint}/${id}`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(updatedDetails)
    })
  }
}
