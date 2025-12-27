const accountId = 144553 // that is use for store const or fixed value
let accountEmail = "abhi1245@gmail.com" // we use for store variable 
var accountPassword = "12345" // we use for also store variable but generally not use due to issue in block scope and functional scope 
accountCity = "Kolkatta" // 
let accountState; // undefined 

// accountId = 2 // not allowed


accountEmail = "saks125@gmail.com"
accountPassword = "24568"
accountCity = "Patna"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])