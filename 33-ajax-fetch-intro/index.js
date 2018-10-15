function sleep(n) {
  let i = 0
  while(i < (12 ** 8) * n) {
    i++
  }
}

console.log('Starting the sleep function')
sleep(10)
console.log('Wow that sleep function took forever to run. 1 Star 🌟')

document.querySelector('#click-button').addEventListener('click', console.log)


console.log('THIS CONSOLE LOG IS WRITTEN BEFORE MY FETCH')

fetch('https://dog.ceo/api/breeds/image/random')
// .then will be ignored if there is an error; we will jump right to the catch
  .then(/*FUNCTION*/responseObj => {
    return responseObj.json()
  })
  .then(parsedDog => {
    console.log(parsedDog)
  })
  .catch(e => console.error(e))

  try {
    console.log(notAVariable)
  } catch (e) {
    console.warn('THAT DID NOT WORK', e)
  }


console.log('THIS LOG IS AFTER THE FETCH')


fetch('https://dog.ceo/api/breeds/image/random')
  .then(/*FUNCTION*/response => /*RETURN*/ response.json())
  .then(dogJSON => {
    const newImg = document.createElement('img')
    newImg.src = dogJSON.message
    document.querySelector("#dog").appendChild(newImg)
  })
