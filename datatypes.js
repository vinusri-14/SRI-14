// data types 

console.log("--------------------------------")
console.log("primitive types")
console.log("--------------------------------")

console.log(" ------number------")
var age =19
var percent =92.0
console.log(age)
console.log(percent)

console.log("------string------")
var name = "vinusri"
console.log(name)

console.log("-----booleans------")
var isstudent = true 
console.log(isstudent)

console.log("-----null------")
var emptyvalue = null
console.log(emptyvalue)

console.log("-----bigint-----")
var bigint = 762459324689744
console.log(bigint)

console.log("------symbol-----")
var symbolvalue = Symbol('symbol')
console.log(symbolvalue)

console.log("-----undefined-----")
var undefinedvalue
console.log(undefinedvalue)

console.log("--------------------------------")
console.log(" non-primitive types")
console.log("--------------------------------")

console.log("-----object-----") 
var person = {
    name1 : "Vinusri", 
    age : 20 
}
console.log(person);


console.log("-----array-----")
var number =[1,2,3,4,45,89]
console.log(number)
console.log(number.length)
console.log(number.length[4])


console.log("-----function-----")
function greet(){
    console.log("hello world")
}
greet()

function add(a,b){
    console.log(a+b)
}
add(5,10)