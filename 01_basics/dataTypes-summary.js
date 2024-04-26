//. //  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const inLogggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

//const BigNumber = 1234567899887665432n

// reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name: "adeeb",
    age: 22,
}

//  const myFunction = function(){
//      console.log("Hello World");

//  }

 // typeOf checking

//  console.log(typeof outsideTemp);
//  console.log(typeof scoreValue);
//  console.log(typeof BigNumber);
//  console.log(typeof myFunction);


//    Read the Document from Original ECMA Script
 // https://262.ecma-international.org/5.1/#sec-11.4.3



 // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // Stack(Primitive) , Heap(Non Primitive)

 let myYouTubeName = "Khushter Adeeb"

 let anotherName = myYouTubeName
 anotherName = "Science"

 console.log(anotherName);
 console.log(myYouTubeName);

 let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
 }

 let userTwo = userOne
 userTwo.email = "hitesh@google.com"

 console.log(userOne.email);
console.log(userTwo.email);