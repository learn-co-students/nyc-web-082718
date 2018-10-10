const yourFn = () => {
  return 'this is ur fn'
}

console.log(yourFn()) //'this is ur fn'

const ourFn = (callbackFn) => {
  console.log(callbackFn())
}

ourFn(yourFn) // this is ur fn

const myHigherOrderFn = () => {
  return () => {
    return 'higher order'
  }
}

console.log(myHigherOrderFn()()) //higher order

// as long as i have a SINGLE expression, i can implicitly return it
const implicit = () => "wot will happen 🤔";

(function myIIFE(num) {
	return num * num
})(5);


(num => num * num)(50);


// arr.push is IMPURE because it mutates data directly

const names = ['andrew', 'evans', 'matt', 'brooke']

names.map(/*FUNCTION*/(name) => {
  return name.toUpperCase()
})


function myPureMap(arr, callback) {
  const results = []

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i]
    const transformedElement = callback(currentElement)
    results.push(transformedElement)
  }
  return results
}


const capitalizeNames = names.map(name => name.toUpperCase())

console.log(capitalizeNames) // ['ANDREW', 'EVANS', 'MATT', 'BROOKE']



// I want to slugify a URL

// Slap chOp discounT -> slap_chop_discount

// i need to lowercase all the letters
// i need to replace all the spaces with underscores

const lowerCaseString = /*FUNCTION*/(string) => /*RETURN*/string.toLowerCase()

const subSpaceUnderscore = /*FUNCTION*/(string) => /*RETURN*/string.split(' ').join('_')

const slugifyUrl = (string) => subSpaceUnderscore(lowerCaseString(string))

const arrOfNums = [1, 2, 3, 4, 5]

arrOfNums.reduce(function(sum, ele, idx, arr) {
	console.table(arr)
	console.log("CURRENT INDEX POSITION IS ", idx)
	return sum * ele
},100)
