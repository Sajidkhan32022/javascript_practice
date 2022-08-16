class Company {
    constructor(name, location){
        this.name = name
        this.location = location
    }

    getemployeedetail(){
        return `${this.name}, ${this.location}` 
    }
}

class employee extends Company{
    constructor(name, location, Ename, dep, des){
        super(name, location)
        this.Ename = Ename
        this.dep = dep
        this.des = des
    }

    detail(){ 
        console.log(`${this.name}, ${this.location}, ${this.Ename}, ${this.dep}, ${this.des}`)       
    }

    getemployeedetail(){
        super.getemployeedetail()
        this.detail()
    }
}
//obj3.getemployeedetail()
const obj1 = new Company('codeteck', 'lahore')
const obj2 = new employee('codeteck', 'lahore','sajid', 'computer', 'back-end-develpor')
const obj3 = new employee('codeteck', 'lahore')

console.log(obj1.getemployeedetail())
//  console.log(obj2.getemployeedetail())
//obj3.getemployeedetail()
obj2.getemployeedetail()

