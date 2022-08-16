class Person{
    constructor(name, age, gender){
        this.name = name
        this.age = age 
        this.gender = gender
    }
}

class Actress extends Person {
    constructor(name, age, gender, movies, awards){
        super(name, age, gender)
        this.movies = movies
        this.awards = awards

        this.getDetails = ()=>{
            return `${this.name} is a ${this.age} old ${this.gender} in ${this.movies} movies and has own ${this.awards} awards`
        } 
    }
}
var actress = new Actress("Rachel", 30, "Female", 20, 5);
console.log(actress.getDetails())