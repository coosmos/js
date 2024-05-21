//primitive datatype--->store in stack
//reference datatype -->store in heap

let mymail="ashutoshashu2002@gmail.com"
let anothermail=mymail  //copy of mymail

anothermail="sherbort@gmail.com"
console.log(anothermail) //sherbort@gmail.com
//object data type

let user={
    name:
    "ashutosh",
    age:22

}
let user2=user
user2.age=23
//user 2 gets value from the same memory location user  has data stored in heap
//user is a reference datatype 
