const score = 400
//console.log(score);


const balance  = new Number(100)
//console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const othernumber = 123.8966

//console.log(othernumber.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));     // to change the minus  value into positive value

// console.log(Math.round(4.6));  // it depends on above 5 or lower 5 

// console.log(Math.ceil(4.2)); //always takes maximun or upper value O/P = 5 on 4.2

// console.log(Math.floor(4.9)); //always takes minimum  or lower value O/P = 4 on 4.9

// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random()); // always gives value between [ 0 to 1 ]


// console.log((Math.random()*10) + 1);  // we have shifted the value to the left 


// console.log(Math.floor(Math.random()*10) + 1); // even after shifting the value to left i can still give ' 0 '  so avoid 
                                                //   this we have added 1 to it



                                        
const min = 10

const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);