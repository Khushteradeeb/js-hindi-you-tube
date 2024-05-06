
function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("C");
    console.log("D");
    console.log("E");
    console.log("F");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}


const result =  addTwoNumbers(3, 5)

// console.log("result: ", result);


function loginUserMessage(username  = "sam"){
    if(!username){
        console.log("Please enter a Username");
        return
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("adeeb"));
// console.log(loginUserMessage("Adeeb"));


function calculateCartPrice(...num1){
     return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Adeeb",
    price: 199
}

function handleObject(anyObject){
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)

handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function retunSecondValue(getArray){
    return getArray[1]
}

// console.log(retunSecondValue(myNewArray));
console.log(retunSecondValue([200, 400, 500, 1000]));




