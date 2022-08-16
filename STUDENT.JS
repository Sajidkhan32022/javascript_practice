function Student(marks1,marks2){
    let _marks1 = marks1
    let _marks2 = marks2

    Student.prototype.getmarks = function (marknumber) {
        if(marknumber === 1){
            return _marks1
        }
        else{
            return _marks2
        }
    }

    Student.prototype.calcTotal = function() {
        // Write definition here
        this.totalMarks = _marks1 + _marks2
        return this.totalMarks
    }
}

const student = new Student(6,7)

console.log(student.getmarks(1))
console.log(student.getmarks(0))
console.log(student.calcTotal())

