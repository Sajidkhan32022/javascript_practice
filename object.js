//Part 1: declare the function with appropriate parameters "without" using the set keyword and implement it as well.
var product = {
    name: 'Cheese',
    price: 20,
    amount: 10,
    madeIn: 'USA', 
    totalBill() {
        return (this.price*this.amount)
    },
    //write the correct declaration and also write the implementation
    set setPrice (pri){
        this.price = pri-(10/100)*pri
    
    }
}
console.log(product.price)
console.log(product.totalBill())
product.setPrice = 20
console.log(product.price)