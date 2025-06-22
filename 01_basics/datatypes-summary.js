// # Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100 
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 3377454443n 



// Reference (Non Primitive)

// Array, Objects, Functions 


const heros = ["ironman", "superman", "spiderman"];

let myObj = {
    name: "krish",
    age: 21,
}

const myFunction = function(){
    console.log('hell world');
}


console.log(typeof bigNumber);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), heap(non-primitive) 

let myYoutubename = "krishpassey"

let anothername = myYoutubename
anothername = "krishh"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com"
    upi: user@ybl
}

let userTwo = userOne

userTwo.email = "krish@google.com"

connsole.log(userOne.email);
console.log(userTwo.email);
