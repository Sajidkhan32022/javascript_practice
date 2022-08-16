for (let i = 20 ; i > 10 ; --i){
    console.log(`${i}`)
}
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
  console.log(sum)
}
console.log(sum)