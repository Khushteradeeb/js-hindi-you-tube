
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
console.log(loginUserMessage("Adeeb"));