const person = {
    name : 'sajid',
    health : 150,
    strength : 25,
  
    describe(){
      return (`${this.name},${this.health},${this.strength -=20},${this.lname = 'khan'}`)
    }
  }
  console.log(person.describe())
  console.log(person)
  
  console.log(Math.random(1,8)*100)
  
  //console.log(person.name, person.health, person.strength)
  
  person.health -=20
  person.strength -=5
  
  //console.log(person.name, person.health, person.strength)
  
  person.health +=30
  person.strength +=20
  
  /*function describe(character){
    console.log(character.name, character.health, character.strength)
  }
  
  describe(person) */
  