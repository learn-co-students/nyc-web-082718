const dataStore = { lists: [] }
document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const newListForm = document.getElementById('create-list-form')
  const mainContentDiv = document.getElementById('app-content')
  const listDiv = document.getElementById('lists')

  newListForm.addEventListener('submit', function(event) {
    // TODO: add string version of same code
    event.preventDefault() //FORM will try to make a post request; i need to hijack this event
    const newListTitle = document.getElementById('new-list-title').value
    dataStore.lists.push(newListTitle)


    // const newDiv = document.createElement('div') //create new div
    // const titleH2 = document.createElement('h2') //create new h2
    // const deleteButton = document.createElement('button') //create new button
    // deleteButton.className = 'delete-list'
    // deleteButton.dataset.title = newListTitle
    // deleteButton.innerText = 'X'
    // titleH2.innerText = newListTitle //set the user list title to the h2 inner text
    // titleH2.appendChild(deleteButton)
    // newDiv.appendChild(titleH2) //append the new h2 to the new div
    // listDiv.appendChild(newDiv) //append the new div to the list div

    listDiv.innerHTML += `
      ${ dataStore.lists.length === 1 ? renderNewTaskForm() : '' }
      <div>
        <h2>
          ${newListTitle}
          <button data-title="${newListTitle}" class="delete-list">
            X
          </button>
        </h2>
      </div>
    `
    // listDiv.innerHTML = someBigRenderFn() //gives us all the HTML for the page
  })


})
const renderNewTaskForm = () => {
  return `
  <div>
    <form id="create-task-form">
      <label for="parent-list">Select List:</label>
      <select id="parent-list">
        ${dataStore.lists.map(list =>
          `<option value=${list}>${list}</option>`
          )
        }
      </select>
    </form>
  </div>
  `
}
