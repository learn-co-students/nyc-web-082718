document.addEventListener('DOMContentLoaded', function() {

  // i need to find my form
  const commentForm = document.getElementById('comment-form')
  // i need to find the div that new comments will be appended to
  const commentContainer = document.getElementById('commentsContainer')
  // grab the helicopter parent div
  const helicopterParent = document.getElementById('helicopter-parent')

  // listen for the SUBMIT event
  commentForm.addEventListener('submit', function(event) {
    event.preventDefault() //stop the default action of POSTING
    // find the input field the user was typing in
    const inputTag = event.target.querySelector('#new-comment')

    // find what the user typed
    const userInputString = inputTag.value
    // add this new string to the DOM
    const newComment = document.createElement('p')
    newComment.innerText = userInputString
    commentContainer.appendChild(newComment)

    event.target.reset()
  }) //end of form submit handler

  document.addEventListener('click', function(event) {
    console.log(event.target) //target will be the NODE that was clicked
  })
})
