function Employees(name, age, designation){
    this.name = name
    this.age = age 
    this.designation =designation
    this.decribe = () => {
        return `${this.name}, ${this.age}, ${this.designation}`
    }
    this.setage = (newage) => {
        this.age = newage
    }
}

const obj1 = new Employees('sajid', 25, 'back-end-developer')
console.log(obj1.name)
console.log(obj1)
console.log(obj1.decribe())
console.log(obj1.setage(30))
console.log(obj1.decribe())
/* function Employees(name, age, designation){
    this.name = name
    this.age = age 
    this.designation =designation
    this.decribe = function () {
        return `${this.name}, ${this.age}, ${this.designation}, ${this.company()}`
    }
    /*this.setage = (newage) => {
        this.age = newage
    } */


/*
Employees.prototype.company = function () { 
    return 'codeteck'
}

const obj1 = new Employees('sajid', 25, 'back-end-developer')


//console.log(obj1.name)
console.log(obj1.decribe())

const obj2 = new Employees('talha', 23, 'front-end-developer')



console.log(Employees.prototype) */

