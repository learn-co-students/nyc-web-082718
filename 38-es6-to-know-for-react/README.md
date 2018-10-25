# Helpful ES6 Syntax to Know for React ⚛️

![](https://media.giphy.com/media/13twUEuUnCrEju/giphy.gif)

---

## The Following are Used heavily in Mod 4 for React (and are important to know if you're writing modern JavaScript):

#### destructuring

```js
const spaceship = {
  pilot: 'elon musk',
  guidance: 'marc zucc',
  chef: 'gordon ramsay'
}
/* from the object spaceship,
please pull out the VALUES stored at
pilot and chef */
const { pilot, chef } = spaceship

console.log(pilot) // 'elon musk'
console.log(chef) // 'gordon ramsay'

class Person {
  // props -> { name: 'winfield', favColor: 'red' }
  constructor(props) {
    this.name = props.name
    this.favColor = props.favColor
  }
}

//VS

class Person {
  // props -> { name: 'winfield', favColor: 'red' }
  constructor({ name, favColor }) {
    this.name = name
    this.favColor = favColor
  }
}

```

---

#### key value assignment shortcut

```javascript
const pizza = 'pepperoni'
const restaurant = 'sbarros authentic New York Pizza™️'

const pizzaObj = {
  pizza: pizza,
  restaurant: restaurant
}

// name of key is the same as the name of the variable we wish to assign to that key
const pizzaObj2 = { pizza, restaurant }
```

---

#### ES6 Spread Operator

- `slice()` or `Object.assign()`
- removing elements from an array

```js

```

---

#### all the forms of arrow functions

```javascript

```

---

#### function binding vs arrow functions

```javascript
const Dog = {
  name: 'winfield',
  favSnacks: ['cheese', 'peanut butter', 'carrots'],
  sayName: function() {
    return this.name
  },
  barkName: () => {
    return this.name + 'BARK!'
  },
  sayFavFoods: function() {
    // this is Dog
    this.favSnacks.forEach(s => {
      console.log(`${this.name} likes ${s}`)
    })
  }
}
// this will be Dog
Dog.sayName() //'winfield'
// this will be the window
Dog.barkName() //'undefined BARK!'
Dog.sayFavFoods()
```

---

#### class instance properties and class syntax in general

```javascript

```

---

#### passing functions around as arguments (callbacks) and ES6 Iterators (map, reduce, forEach, filter, find, etc)

```javascript

```

---

#### dynamic object keys

```javascript

```

### External Resources

- [Modern JavaScript](http://www.reactnativeexpress.com/modern_javascript)
- [Wes Bos Simple Guide for Undertanding Destructuring in JS](https://wesbos.com/destructuring-objects/)
- [MDN Article on ES6 Object Shorthand Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015)
- [MDN Article on ES6 Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN Article on Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN Article on `Function.prototype.bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
- [MDN Article on ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN Article on Callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [MDN Article on forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN `Array.prototype.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [MDN "Working with Objects"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
