console.log('%c Hello, World!', 'color: orange')

const header = document.querySelector('h1')

const allHeaders = document.getElementsByTagName('h1')

document.querySelector('h1').innerText = 'flamingo friday FRIYAY'

// const memeUnorderedList = document.createElement('ul')
//
// dankMemes.forEach((memeUrl) => {
//   // const newLi = document.createElement('li')
//   const newImgTag = document.createElement('img') //creates a new NODE
//   newImgTag.src = memeUrl //assigns the NODE a URL; src
//   memeUnorderedList.appendChild(newImgTag) //appends the new NODE to the UL
// })
//
// document.body.appendChild(memeUnorderedList)
//

const imageContainer = document.getElementById('container')

imageContainer.innerHTML = dankMemes.map((memeURL) => {
  return `<img src="${memeURL}">`
}).join('<hr>')
