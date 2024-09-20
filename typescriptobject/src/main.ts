export type Grade = number | "A" | "B" | "C" | "D" | "E" | "F" | undefined;
export type Student={
    firstName:string,
    lastName:string,
    age:number
    grades:Grade[]
    //displayInfo(): string;
};
//displayStudent Info
function displayInfo(student:Student){
    console.log(`${student.firstName} ${student.lastName} ${student.age},
    Grades:${student.grades.map(grade => grade ? grade : '*').join(',')}`)
}

//print allStudents

function displayAllStudents(students:Student[]){
    students.forEach(student => displayInfo(student))
}

//create Students
const student1:Student={
    firstName:"Marry",
    lastName:"John",
    age:25,
    grades: ["A", 2, "C", "D", 6, undefined],
}

const student2:Student = {
    firstName:"Jerry",
    lastName:"Max",
    age:54,
    grades: ["B", 4, "F", "D", 3, undefined]
}

const student3:Student = {
    firstName:"Anton",
    lastName:"Scholz",
    age:36,
    grades: ["E", 5, "C", "D", 1, undefined]
}

const students:Student[]=[student1,student2,student3]

displayAllStudents(students)


