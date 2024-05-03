// singleton 
Object.create

// object literals

const mySym  = Symbol("key1")

const JsUser = {
    name: "Adeeb",
    "full name": "Khushter Adeeb",
    [mySym]: "mykey1",
    age: 18,
    location: "muzaffarpur",
    email: "adeeb@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Mon","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "khushter@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email  = "khushter@google.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());