let listIds = 1 //TODO: FIX THIS
class List {
  constructor(title) {
    this.id = listIds++
    this.title = title
  }

  static renderAllLists() { //produce all of the HTML for all of the lists
    return 'currently not working lol'
  }

  render() { //render the HTML for one particular list
    return `
      <div>
        <h2>${this.title}
          <button data-title="doughnuts" class="delete-list">
            X
          </button>
        </h2>
      </div>
    `
  }
}
