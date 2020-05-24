function Mage (name, health) {
    let mage = {
      name,
      health
    }
  
    return Object.assign(
      mage,
      castSpell(mage),
      takeDamage(mage)
        
    )
  }
  function Fighter (name, health, weapon) {
    let fighter = {
      name,
      health,
      weapon
    }
  
    return Object.assign(
      fighter,
      attack(fighter),
      takeDamage(fighter)
        
    )
  }
  function Weapon (name, damage) {
    let weapon = {
      name,
      damage
    }
    return weapon
  }
  const attack = (state) => ({
    hit(target){
        console.log(`${state.name} is attacking ${target.name}`)
        target.ouch(state.weapon.damage)
    }
  })
  const takeDamage = (state) => ({
    ouch(amount){
        state.health -= amount
    }
  })
  const castSpell = (state) => ({
    abra(spellName,target){
        spells = {
            heal : target.health += 20,
            burn : target.health -= 30
        }[spellName]
        console.log(`${state.name} casts ${spellName} on ${target.name}`)
    }
  })

  const CC = Weapon('CC',20)
  const nt = Weapon('neurotoxin',30)
  const magicMan = Mage('magicMan',100)
  const chel = Fighter('chel',100,CC)
  const glados = Fighter('glados',1000,nt)
  chel.hit(glados)
  console.log(glados.health)
  magicMan.abra('burn',glados)
  console.log(glados.health)