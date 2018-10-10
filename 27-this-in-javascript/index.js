window.name = 'window'

/************ Function Called with New Keyword ***********/

function Person(nameArg) {
  // this -> {name: name}
  this.name = nameArg
}

const andy = new Person('andy')
/********************************************************/

/************ Bind Call Apply ****************************/
// i can FIX the value of this to a particular object
const rasputin = {
  name: 'rasputin',
  hobby: 'magic'
}

const roseanne = {
  name: 'rosie',
  hobby: 'TV'
}

function sayName() {
  return `${this.name} likes to practice ${this.hobby}`
}

const sayNameBoundToRasputin = sayName.bind(rasputin)

const sayNameBoundToRoseanne = sayName.bind(roseanne)

const sayNameBoundToPOJO = sayName.bind({ name: 'dobby-billy', hobby: 'making up words (even tho they are all made up lol)' })

function sayNameWithArgs(power, favFood) {
  return `${this.name} has ${power} and likes 2 eat ${favFood}`
}

sayNameWithArgs.call(rasputin, 'cannot b killed', 'borscht')

sayNameWithArgs.apply(rasputin, ['cannot b killed', 'borscht'])
/********************************************************/


/************ Function called on an Object ***************/

const cookies = {
  blood: true,
  town: 'FlavorTown™️',
  eat: function() {
    console.log('THIS IS ', this)
    return `This cookie was made in ${this.town}`
    // return this.blood ? 'This cookie is bloody delicous' : 'this cookie sucks'
  }
}

const alsoEat = cookies.eat
alsoEat === cookies.eat

const tire = {
  carName: 'honda pilot',
  materials: ['rubber', 'metal', 'dinosaur bones'],
  nameMaterials: function() {
    console.log('THIS IN nameMaterials ', this)
    this.materials.forEach(function(material)  {
      console.log('THIS IN FOREACH CALLBACK ', this)
      console.log(`${this.carName} is made with: ${material}`)
    }.bind(this))
  }
}
// ES6 using ARROW FUNCTIONS
const johnny = {
  catchphrase: 'o no',
  favSnacks: ['bloody cookies', 'sugar', 'chips'],
  eatSnacksNested: function() {
    return () => {
      this.favSnacks.forEach((snack) => console.log(`Eating ${snack}`))
    }
  }
}
// ES5 using BIND
const johnny2 = {
  catchphrase: 'o no',
  favSnacks: ['bloody cookies', 'sugar', 'chips'],
  eatSnacksNested: function() {
    return function() {
      return this.favSnacks.forEach(function(snack) {
        console.log(`Eating ${snack}`)
      }.bind(this))
    }.bind(this)
  }
}

/********************************************************/


/************ Simple Function Call ***********************/

function harry() {
  console.log(`Ur a wizard now, thx to the `, this)
}

/********************************************************/

/************ Arrow Functions ****************************/

const arrowInObj = {
  howAboutThisArrow: 'AN ARROW',
  whatIsThis: () => {
    console.log('THIS ', this)
    console.log('THIS IS ', this.howAboutThisArrow)
  }
}

const platinum = {
  records: 'kanye has platinum records'
}

const howDoesThisWork = {
  plsWork: 'plssssss',
  wotIsThis: function() {
    console.log('THIS IS ', this)
  }.bind(platinum)
}
/********************************************************/
