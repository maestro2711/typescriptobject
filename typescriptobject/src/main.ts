type Student ={
    id:string,
    name:string,
    age:number
}

//interface
interface StudentInterface {
    id:string,
    name:string,
    age:number

}


const student1:Student = {
    id:"1",
    name:"John",
    age:20,

}

interface StudentInterface{
    phone:string
}
console.log(student1)
