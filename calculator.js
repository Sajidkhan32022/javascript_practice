function Calculator(num1, num2){
    this.num1 = num1
    this.num2 = num2

    this.add = () => {
        return this.num1+this.num2
    }

    this.sub = () => {
        return this.num1-this.num2
    }

    this.multi = () => {
        return this.num1*this.num2
    }

    this.dev = () => {
        return this.num1/this.num2
    }

    this.mud = () => {
        return this.num1%this.num2
    }
}

const numbers = new Calculator(4,4)

console.log(numbers.add())