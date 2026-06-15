
//let and const

let age = 20
const name = "vinusri"
console.log(name);
console.log(age);

//template literals

let studentname1 = "oviya"
let course = "Bsc.csa"
console.log(` my name is ${studentname1} and i study ${course} .`);

// object destructuring

const student1 ={
    name1 :" swathi", 
    course1 :"B.sc.csa" , 
    age1 : 19};

const{name1,course1,age1} = student1 ;
console.log(name1)
console.log(course1)
console.log(age1)

//array destructuring

const colur =[ "red", "green"," blue"];
const [first,secode,third] =colur;
console.log(first) 
console.log(secode) 
console.log(third) 

//spread operator

const updatedstudent =[ 
    ...student ,
    "sangavi"
];
console.log(updatedstudent)

//rest operator

function maximummarks(...marks){
    let max = Math.max(...marks);
    return max;

}
console.group("maximum marks :",maximummarks(90,99,70))