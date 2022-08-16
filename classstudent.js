class Students {
    constructor(name, sem, age, marks){
        this.name = name
        this.sem = sem
        this.age = age
        this.marks = marks
    }

    static students(student1){
        return student1.name
    }
}

const student1 = new Students('sajid', 8, 25, 98)
const student2 = new Students('talha', 8, 25, 90)

console.log(Students.students(student1))
console.log(Students.students(student2))

