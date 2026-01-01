//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Rishi",
    age: 22
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// stack(Primitive) , Heap(Non-Primitive)

let myYoutubename = "Audionary version"

let anothername = myYoutubename

anothername = "Studywithrishi"
console.log(myYoutubename);
console.log(anothername);

let UserOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = UserOne

userTwo.email = "rishi@gmail.com"

console.log(UserOne.email);
console.log(userTwo.email);


