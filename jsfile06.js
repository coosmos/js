// //numbers
// const score=400
// console.log(score)

// const balance =new Number(100)
// console.log(balance)

// console.log(balance.toString().length)  //chaining of methods possible

// console.log(balance.toFixed(2))

// const othername=23.89666
// console.log(othername.toPrecision(3)) //toFixed rounds off the number to the nearest 2 decimal places

// const num2=123.89666
// console.log(num2.toPrecision(3)) //toFixed rounds off the number to the nearest 2 decimal places

// const num3=1123.89666
// console.log(num3.toPrecision(3)) //toFixed rounds off the number to the nearest 2 decimal places

// const hundreads=1000.232
// console.log(hundreads.toExponential(2)) //toFixed rounds off the number to the nearest 2 decimal places

// const zeros=10000000
// console.log(zeros.toLocaleString('en-IN')); //to represent numbers in indian standard--to make it more readable

//+++++++++++ MATHS ++++++++++

console.log(Math)

console.log(Math.abs(-4)); //-ve positive mein change hojata hain

console.log(Math.round(4.6))

console.log(Math.round(4.4))

console.log(Math.ceil(4.2))

console.log(Math.ceil(4.8))

console.log(Math.floor(4.9))

console.log((Math.random()*10 )+1) //Math.random gives values between o and 1

const min=10

const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min) //to get a random number between 10 and 20