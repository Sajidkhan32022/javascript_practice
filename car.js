class Vehicle {
    constructor(speed, model){
        let _speed = speed
        let _model = model

        this.getmodel = ()=>{
            return _model
        }
        this.getspeed = ()=>{
            return _speed
        }
    }
}

class Car extends Vehicle{
    constructor(speed,model){
        super(speed,model)
        this.name = ''
        }

        setDetails  = (name)=>{
            this.name = name
        }

        getDetails = ()=>{
            let details = this.name+ ", " + this.getmodel() + ", " + this.getspeed()
            return details
        }
}
const obj = new Car(220, '2022')
obj.setDetails('x')
console.log(obj.getDetails('x'))
console.log(obj.name)
