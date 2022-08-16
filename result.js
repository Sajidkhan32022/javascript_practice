const students = [
    {
      name: "Anna",
      sex: "f",
      grades: [4.5, 3.5, 4]
    },
    {
      name: "Dennis",
      sex: "m",
      country: "Germany",
      grades: [5, 1.5, 4]
    },
    {
      name: "Martha",
      sex: "f",
      grades: [5, 4, 2.5, 3]
    },
    {
      name: "Brock",
      sex: "f",
      grades: [4, 3, 2]
    }
  ];
  result = []
  for (let student of students){
    if (student.sex === 'f'){
      sum = 0
      len = student.grades.length
      //console.log(student.grades.length)
  
      for(grade of student.grades){
  
        sum +=grade
        avg = sum / len
  
      }
      //console.log(sum)
      //console.log(len)
        const student_Record = {
          name : student.name,
          sex : student.sex,
          grades : avg
        }
  
      result.push(student_Record)
      //console.log(student_Record)
    }
  }
  console.log(result)
  
    
    
  