//Dates
let mydate =new Date()
console.log(mydate)
console.log(mydate.toISOString())
console.log(mydate.toString());
console.log(mydate.toLocaleDateString());
//Date is an object  in js

let mycreateddate= new Date(
    2023,0,23
)

console.log(mycreateddate.toDateString());

//Date is an object  in js  
let declaredate=new Date(2024,5,25,10,30)
console.log(declaredate.toLocaleString());

let mytimeStamp =Date.now()
console.log(mytimeStamp);
console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000));

let  newDate =new Date()
console.log(newDate.getDay());
console.log(newDate.getDate());