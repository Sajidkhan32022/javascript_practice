/*function show (name) {
    console.log('javascript callback' + ' ' + name)
}

function print(show){
    show('function')
}
print(show)*/

//const { clearInterval } = require("timers")

/*function print (name, show = ( callback) => {
    console.log('javascript' + callback)

}){
     show ('function')
    console.log(name)
}

print('sajid') */ 


function show (lname ,callback){
    console.log(lname)
    console.log('before')
    callback(lname)
    console.log('after')
    console.log(lname)
} 
show ('khan',(name) =>{
    console.log('javascript',name)
})


setTimeout(()=>{
    console.log('i love you to')
    clearInterval(set)
},3000)
console.log('i love you')

const set = setInterval(()=>{
    console.log('i miss you')
},1000)

const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  console.log(date.toLocaleTimeString()) ;
}


setTimeout(( )=>{
    clearInterval(myInterval)
},3000)


const arr = [1,2,3,,4,5,6]

const a = arr.forEach(myfunction)

function myfunction(r){
    console.log(r)
} 
const b =111222
console.log(typeof(b))
console.log(Promise())
