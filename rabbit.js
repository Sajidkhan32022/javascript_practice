function Animal()
{  
   this.name = 'bunny';  
}  

function Rabbit() 
{  
}  

Rabbit.prototype = Object.create(Animal.prototype);  
const rabbit = new Rabbit();  
console.log(rabbit.name);