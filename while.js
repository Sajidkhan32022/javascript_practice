/*let i = 0 ;
while (i < 20){
    console.log(`${i}`)
    i++
} */

let lives = 3 ;
while( lives > 0) {
    const  results = prompt(" wht is 2 + 2?")
    if (results !== "4"){
        lives--;
    }
}
console.log("dead")