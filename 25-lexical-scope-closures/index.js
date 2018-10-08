/****************Lexical Scoping************************/

const name = 'andrew'

function sayName() {
  const name = 'billsarah'
  console.log(name)
}

sayName() //billsarah

function jewel() {
  const juul = 'a flash drive that ppl love 4 sum reason'
  return juul
}

console.log(jewel()) //a flash drive that ppl love 4 sum reason

// console.log(juul) //juul is not defined

function potato() {
  const latke = 'a potato pancake. nice'
  return function pancakes() {
    return latke
  }
}

console.log(potato()()) //a potato pancake. nice

// console.log(latke) //latke is not defined

/*******************************************************/

/*******************JS Scopes***************************/
/*******************Global***************************/

const hillary = 'chillary' //global varaible; accessible everywhere

function whoopsIForgotToLet() {
  return function() {
    whoopsIDidItAgain = 'an absolute banger. GREAT SONG. Truly powerful. We love u britney'
  }
}

whoopsIForgotToLet()()

// if i forget to use var, let, const, my variable becomes GLOBAL

// whoopsIDidItAgain is a global var because we forgot to use var, let, const
console.log(whoopsIDidItAgain) //an absolute banger. GREAT SONG. Truly powerful. We love u britney

/*******************Function***************************/

function localDog() {
  const dog = 'winfield' //dog is local to the whatHappened fn
}

// dog //dog is not defined

/*******************Block***************************/

{
  const squirrel = 'steven'
}

const saySquirrel = () => {
  const squirrel = 'also steven'
}

// console.log(squirrel) //squirrel is not defined

/*******************************************************/

/************** Var Let Const *********************/
/////////////****** HOISTING *******////////////
console.log(scooby) //undefined
var scooby = 'snax'
console.log(scooby) //snax

// functions declared w/ fn keyword WILL be hoisted
console.log(vanilla()) //bean
function vanilla() {
  return 'bean'
}

// let and const DO NOT HOIST
// console.log(poopy) //poopy is not defined
let poopy = '💩'
console.log(poopy) //💩

// console.log(hotdog) //hotdog is not defined
const hotdog = 'gross and sad'
console.log(hotdog) //gross and sad

// THIS COULD BE BAD; i expect this var to be a string but now its a fn
// var can be REDECLARED and REASSIGNED unlimited times
var bentley = 'bulldog'

var bentley = function() {
	return 'THIS IS A FUNCTION'
}

// let can be REASSIGNED as many times as I want but only DECLARED once (per lexical scope)

let theWeTM = 'We over ME™️'

theWeTM = 'some buildings lol'

// let theWeTM = 'a new variable' //error: theWeTM has already been delcared

function declareMe() {
  let theWeTM = 'another local string'
}

declareMe()

// const can only be declared and assigned ONCE (per lexical scope)

const andy = 'chromeboi™️'

// andy = 'ANDREW'

// const andy = 'not my name lol'

function localAndy() {
  const andy = 'florida man is actually andy in disguise lol'
}

localAndy()

const names = ['hengry', 'topanga', 'corey', 'mr. feeny']
names.push('sean') //totally fine since we are not reassigning or REDECLARING; mutating this array is fine


//****** First Class Functions ******************//

const donutFn = function(donutType) {
  console.log(`I am eating a ${donutType} donut`)
}

const donut = 'glazed'

donutFn(donut) //I am eating a glazed donut

function myHigherOrderFn(callbackFn) {
  console.log(callbackFn())
}


function myCallback() {
  return 'i like donuts'
}

myHigherOrderFn(myCallback) //i like donuts


function createMultiplier(num1) {
  return function innerMultiplier(num2) {
    return num1 * num2
  }
}

const multByFive = createMultiplier(5)
const doubler = createMultiplier(2)
const tripler = createMultiplier(3)
createMultiplier(100)(50)


const blood = function() {
  return 'spooky season'
}

console.log(blood()) //spooky season

// sometimes chrome will not give you access to variables in the enclosing lexical scope when in a debugger
// if this happens, try `console.log` in your function
function outerFn() {
  const meatball = 'delicious'
  return function innerFn() {
    return function superInnerFn() {
      console.log(meatball)
      debugger
    }
  }
}


outerFn()()() //delicous
