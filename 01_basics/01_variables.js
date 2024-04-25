const accountId = 144553
let accountEmail = "adeeb@google.com"
var accountPassword = "12345"
accountCity = "Muzaffarpur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ad@eb.com"
accountPassword = "55552121"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])