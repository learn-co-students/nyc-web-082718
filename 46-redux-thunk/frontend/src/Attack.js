const allAttacks = []

class Attack {
  constructor({ name, power, accuracy }) {
    this.name = name 
    this.power = power 
    this.accuracy = accuracy 

    allAttacks.push(this)
  }
}