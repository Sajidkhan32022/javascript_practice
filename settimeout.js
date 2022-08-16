

const int = setInterval(() => {
    console.log('set interval ')
},1000)
setTimeout(() => {
    console.log('hello world')
    clearInterval (int)
},3000)


const name = () => {
    console.log('hello')
}

console.log(__dirname)
//console.log(global)*/


