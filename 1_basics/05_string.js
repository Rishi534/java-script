const name = "Rishi"
const repoCount = 25

// console.log(name + repoCount + "Value") ; 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Rishi-ya-dav')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("i"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9,4)
console.log(anotherString);


const newStringone = "    rishi    "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://rishi.com/rishi%20yadav"

console.log(url.replace('%20' , '-')); // using for replace one thing to another thing

console.log(url.includes('rishi')); // includes is use for check that string value present or not.

console.log(gameName.split('-'));



