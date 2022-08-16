function SequareSum(num1, num2, num3){
    this.num1 = num1
    this.num2 = num2
    this.num3 = num3

    this.sequaresum = function (){
        return this.num1**2 + this.num2**2 + this.num3**2
    }
}

const numbers = new SequareSum(2, 3, 4)

console.log(numbers.sequaresum())