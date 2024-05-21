//console.log(null>0) -->false
// console.log(null==0) -->false
// console.log(null>=0)  -->true thee reason is that an equality  check ==
// and comparisons wrk differnetly comparisons  convert null to 0
// and treat it as number 
// === strict check


//datatypes summary
// 1. primitive data types
//7 types: String ,Number,null,Boolean,undefined,Symbol(kisi bbhi value ko unique banane mein use hota hain)
//BigInt

//js is dynamic typed language

// 2. reference data types
//1.arrays,objects,functions

const id =Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId) //false

//arrays
const names=["ashutosh","aman","sheikh","obama"]
let myObj={
    name:"ashutosh",
    age:22
}
const myFunction=function(){
    console.log("hello")
}