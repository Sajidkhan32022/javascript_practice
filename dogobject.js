const Dog = {
    name : 'TIM',
    species : 'German Shepherd',
    size : '3 feet',
    
    decribe(){
      return`${this.name}, ${this.species}, ${this.size}`
    },
  
    bark(){
      return 'woof'
    }
  }
  
  console.log(Dog.decribe())
  console.log(Dog.bark())
  console.log(Dog)