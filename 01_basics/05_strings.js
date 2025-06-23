const name = "hitesh"
const repoCount = 8

// console.log(name + repoCount + "value")

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('krish-passey')


console.log(gameName[0])
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('i'));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-3 , 4)
console.log(anotherString);

const newStringOne = "    krish.   "
console.log(newStringOne);
console.log(newStringOne);


const url = "https://krish.com/krish%20passey"

console.log(url.replace('%20', '-' ));


console.log(url.includes('sundar'));

