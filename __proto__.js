const Person = {
    name : 'Amy',
    age : 28
}

const Teachar = {
    subject : 'Math',
    grade : 8
}

Teachar.__proto__=Person
console.log(Teachar.name)