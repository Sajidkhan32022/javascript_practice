class Car {
    constructor(name ,speed, color){
        this.name = name 
        this.speed = speed
        this.color = color 
    }

    static isFaster = function (car1, car2){
            if(car1.speed > car2.speed){
                return `${car1.name} is faster than ${car2.name}`
            }   else if (car2.speed > car1.speed){
                return `${car2.name} is faster than ${car1.name}`
            }   else{
                return `${car1.name} and ${car2.name} have the same speed`
            }
        }

}

const car1 = new Car("Honda", 50, "Red")
const car2 = new Car("Toyota", 80, "Black")

console.log(Car.isFaster(car1, car2))