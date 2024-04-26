 // DATES 

 let myDate = new Date()
 //console.log(myDate.toString());  //output: Fri Apr 26 2024 14:50:55 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());    // output:[Fri Apr 26 2024]

 //console.log(myDate.toLocaleDateString()); // O/P : 4/26/2024

 //console.log(myDate.toISOString());  // O/P : 2024-04-26T15:03:51.260Z

 //console.log(myDate.toJSON());  // O/P : 2024-04-26T15:03:51.260Z


 //console.log(myDate.toLocaleString()); // O/P : 4/26/2024, 3:03:51 PM


 //console.log(myDate.toDateString());  // O/P : Fri Apr 26 2024


 //console.log(myDate.toLocaleTimeString());  // o/P : 3:03:51 PM


// console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 0, 23)
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
//let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());

//let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

 // `${newDate.getDay()} and the time`


newDate.toLocaleString('default', {
    weekday: "long",
    
})
