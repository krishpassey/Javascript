console.log("2" > 1);    // true
console.log("02" > 1);   // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0);  // true
 

console.log(undefined == 0);  //false
console.log(undefined > 0);   // false

// avoid these type of conversions 

//=== 

console.log("22" === 2);
