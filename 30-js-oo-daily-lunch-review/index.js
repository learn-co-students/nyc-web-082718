// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 1
let customerId = 1
let mealId = 1
let deliveryId = 1

class Neighborhood {
  constructor(name) {
    // this inside of constructor will be our newly created OBJECT 'instance'
    this.name = name
    // ++neighborhoodId would increment THEN return; my first id would be 1
    // neighborhoodId++ would return the OLD VAL THEN increment
    this.id = neighborhoodId++
    store.neighborhoods.push(this)
  }

  deliveries() {
    // i need to somehow find ALL the deliveries EVER created
    return store.deliveries.filter(delivery => {
      return delivery.neighborhoodId === this.id
    })
    // once i have found that, i need to FILTER for the deliveries that BELONG_TO this particular neighborhood
  }

  customers() {
    // i need ALL customers
    return store.customers.filter((customer) => {
      return customer.neighborhoodId === this.id
    })
    // i need to find the customers associated with this neighborhood
  }

  meals() {
    // neighborhood HAS_MANY meals THROUGH deliveries
    // i need to find all the deliveries associated with this neighborhood
    const neighborhoodDeliveries = this.deliveries()
    const allMeals = neighborhoodDeliveries.map((delivery) => {
      return delivery.meal()
    })
    // const uniqueMeals = []
    // i have an empty array
    // if i do not have an element in this array, i want to add it
    // if i already have it in my array i DO NOT want to add it
    // how can i check that something is already in my array
    // allMeals.forEach((meal) => {
    //   if (!uniqueMeals.includes(meal)) {
    //     uniqueMeals.push(meal)
    //   }
    //   if (uniqueMeals.indexOf(meal) === -1) {
    //     uniqueMeals.push(meal)
    //   }
    // })
    // return uniqueMeals
    const uniqueMealSet = new Set(allMeals)
    return Array.from(uniqueMealSet)
    // return [...uniqueMealSet]
  }
}

class Customer {
  constructor(name, neighborhoodId) {
    this.name = name
    this.neighborhoodId = neighborhoodId
    this.id = customerId++
    store.customers.push(this)
  }

  deliveries() {
    // iterate over ALL deliveries, looking for the deliviveries that BELONG_TO this particular customer
    return store.deliveries.filter((delivery) => {
      return delivery.customerId === this.id
    })
  }

  meals() {
    // i need all of the deliveries a customer has placed
    const customerDeliveries = this.deliveries()
    // i need to use those deliveries to find the meals placed
    // each meal has a method that returns the meal to which it belongs
    return customerDeliveries.map((delivery) => {
      return delivery.meal()
    })
    // customer HAS_MANY meals THROUGH deliveries
  }
}

class Meal {
  constructor(title, price) {
    this.title = title
    this.price = price
    this.id = mealId++
    store.meals.push(this)
  }

  deliveries() {
    // delivery BELONGS_TO meal
    // delivery has a mealId
    // find all the deliveries
    return store.deliveries.filter((delivery) => {
      return delivery.mealId === this.id
    })
    // FILTER the deliveries; find only the deliveries that belong to this particular meal
  }

  customers() {
    // Meal#customers
    // we are in the meal class
    // a meal HAS_MANY customers THROUGH deliveries
    // i need the deliveries associated with this meal
    const mealDeliveries = this.deliveries()
    const allCustomers = mealDeliveries.map((delivery) => {
      return delivery.customer()
    })
    return allCustomers
  }
}

class Delivery {
  constructor(mealId, neighborhoodId, customerId) {
    this.mealId = mealId
    this.neighborhoodId = neighborhoodId
    this.customerId = customerId
    this.id = deliveryId++
    store.deliveries.push(this)
  }

  meal() {
    // i need all of the meals
    return store.meals.find((meal) => {
      return meal.id === this.mealId
    })
    // i need to FIND the particular meal that this delivery belongs to
  }

  customer() {
    return store.customers.find((customer) => {
      return customer.id === this.customerId
    })
  }

  neighborhood() {
    return store.neighborhoods.find((neighborhood) => {
      return neighborhood.id === this.neighborhoodId
    })
  }
}
