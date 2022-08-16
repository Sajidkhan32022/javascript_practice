const fs = require('fs') 

/*  const text = 'i am sajid khan'
fs.writeFile('./file.txt',text,(err,data) => {
    if (err){
        console.log(err)
    }
    return data
})

fs.readFile("./file.txt",(err,data) => {
    if(err){
        console.log(err)
    }
    console.log(data.toLocaleString())
})  */

const read = fs.createReadStream('./file.txt',{encoding : 'utf-8'})

read.on('data',(chunk) => {
    console.log('data')
    console.log(chunk)
})
