const dataStore = { lists: [] } //GLOBAL DATASTORE
document.addEventListener('DOMContentLoaded', () => {
  // grab DOM elements
  const newListForm = document.getElementById('create-list-form')
  const mainContentDiv = document.getElementById('app-content')

  newListForm.addEventListener('submit', /*function*/ (event) => {
    event.preventDefault() //FORM will try to make a post request; i need to hijack this event
    const newListTitle = document.getElementById('new-list-title').value
    dataStore.lists.push(newListTitle) //add new list to the store
    mainContentDiv.innerHTML = renderAllListContent() //massive helper fn that replaces ALL of the HTML in the div
  }) //end submit handler

}) //end DOMContentLoaded
/**************HELPER FNs (could move to their own file)***************************/
const renderNewTaskForm = () => {
  return `
    <form id="create-task-form">
      <label for="parent-list">Select List:</label>
      <select id="parent-list">
        ${dataStore.lists.map(list => {
            return `<option value=${list}>${list}</option>`
          })
        }
      </select>
        <label for="new-task-description">Task description:</label>
        <input required type="text" id="new-task-description" placeholder="description">

        <label for="new-task-priority">Priority level:</label>
        <input type="text" id="new-task-priority" placeholder="priority">
        <input type="submit" value="Create New Task">

    </form>
  `
}

const renderListDiv = (listTitle) => {
  // USING DOCUMENT.CREATE ELEMENT
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
  return `
      <div>
        <h2>
          ${listTitle}
          <button data-title="${listTitle}" class="delete-list">
            X
          </button>
        </h2>
      </div>
    `
}

const renderAllListContent = () => {
  // map over all lists in the store, producing all of the HTML for the lists
  // 0 is a falsey value; dataStore.lists.length will be truthy as long as the val is not zero
  return `
  ${ dataStore.lists.length ? renderNewTaskForm() : '' }
    <div id="lists">
      ${ dataStore.lists.map(l => renderListDiv(l)).join('') }
    </div>
  `
}
