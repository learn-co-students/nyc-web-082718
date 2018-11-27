const allMonsters = []

class Monster {

  constructor({id, name, weight, evo_level, 
      hp, power, defense, speed, special_attack, 
      special_defense, sprite_front, sprite_back, main_attack_id}) {
      this.id = id
      this.name = name
      this.weight = weight
      this.evo_level = evo_level
      this.hp = hp
      this.power = power
      this.defense = defense
      this.speed = speed
      this.special_attack = special_attack
      this.special_defense = special_defense
      this.sprite_front = sprite_front
      this.sprite_back = sprite_back
      this.main_attack_id = main_attack_id

      allMonsters.push(this)
  }

  setAttack = () => {
    this.attack = allAttacks.find( attack => attack.id === this.main_attack_id)
  }
}

export default Monster