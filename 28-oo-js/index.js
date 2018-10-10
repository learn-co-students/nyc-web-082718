// object literals

const robot1 = { name: 'r2d2', weight: 500, specialty: 'complaining' }
const robot2 = { name: "mark 'the zucc' zuckerberg", weight: 125, specialty: 'data' }
const robot3 = { name: 'Terminator', weight: 50000, specialty: 'terminating' }

// factory function
function roboFactory(name, weight, specialty) {
  return {
    name,
    weight,
    specialty,
    saySpecialty: function() {
      return `${this.name} specializes in ${this.specialty}`
    }
  }
  // return {
  //   name: name,
  //   weight: weight,
  //   specialty: specialty
  // }
}

const robo1 = roboFactory('bender', 1000, 'bending and drinking')
const robo2 = roboFactory('data', 200, 'annoying')


// Object.create

const robotTemplate = {
  name: null,
  weight: null,
  specialty: null,
  saySpecialty: function() {
    return `${this.name} specializes in ${this.specialty}`
  }
}

const ironGiant = Object.create(robotTemplate)
ironGiant.name = 'The Iron Giant'
ironGiant.weight = 5000
ironGiant.specialty = 'shape shifting'

const johnny5 = Object.create(robotTemplate)
johnny5.name = 'The Johnny 5'
johnny5.weight = 300
johnny5.specialty = 'going Rambo™️'

function betterRobotFactory(name, weight, specialty) {
  const newRobot = Object.create(robotTemplate) // {}
  newRobot.name = name // { name: 'HAL 3000' }
  newRobot.weight = weight // {name: 'HAL 3000', weight: 10000 }
  newRobot.specialty = specialty
  return newRobot
}

const HAL = betterRobotFactory('HAL 3000', 100000000, 'cannot do that, DAVE')


// constructor function MUST BE CALLED WITH NEW KEYWORD

function robotConstructorFn(name, weight, specialty) {
  // in constructor fn `this` will be the newly created object
  // `this` -> {  }
  this.name = name
  this.weight = weight
  this.specialty = specialty
}

robotConstructorFn.prototype.saySpecialty = function() {
  return `${this.name} specializes in ${this.specialty}`
}
// new keyword w/ a constructor will return a NEW object and add that constructor to the NEW obj's prototype chain
const bicentennialMan = new robotConstructorFn('bicentennialMan', 400, 'making u laugh and feel sad :(')

const cortana = new robotConstructorFn('cortana', 0, 'helping master chief and not being a better hey google')


// class syntax

class Robot {
  constructor(name, weight, specialty) {
    this.name = name
    this.weight = weight
    this.specialty = specialty
  }

  saySpecialty() {
    return `${this.name} specializes in ${this.specialty}`
  }
}

const betamax = new Robot('betamax', 5, 'fist bump')
const bmo = new Robot('bmo', 2, 'video games, sarcasm')
