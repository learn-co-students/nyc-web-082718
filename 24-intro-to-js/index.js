
console.log('hello world')

console.table(['andrew', 'evans', 'matt', 'brooke'])

console.log('%c I AM PURPLE', 'color: purple')

let anotherNum = 1
let someNum = Number(1)
let someNewNum = new Number(1)


function debugThisCode() {
  console.log('hello')
  // debugger
}

debugThisCode()

if (true) console.log('hi')

const names = ['andrew', 'evans', 'brooke']

names.forEach(name => {
  console.log(name)
  debugger
})
