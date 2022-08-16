class Product {
    constructor(name, price, amount, madeIn){
        let _name = name
        let _price = price
        let _amount = amount
        let _madeIn = madeIn

        this.getname = ()=>{
            return _name
        }

        this.getprice = ()=>{
            return _price
        }

        this.amount = ()=>{
            return _amount
        }

        this.getmadeIn = ()=>{
            return _madeIn
        }

        this.setamount = (num)=>{
            _amount = num
        }
    }

    canSell(num){
        if(this.getAmount() < num){
          return false
        }else{
          return true
        }
    }

    sell(num){
        var temp = this.getAmount()
        if(this.canSell(num)){
            this.setAmount(temp-num) 
            return this.getAmount()
        }else{
            this.setAmount(temp + (num*2)) 
            return this.getAmount()
        }
    }

}

const product1 = new Product('Sufi', 50, 100, 'pakistan')

console.log(product1.getname())
console.log(product1.amount())
product1.setamount(10)
console.log(product1.amount())
