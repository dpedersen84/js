// ===============================
// String methods
// ===============================

// charAt
var string1 = "Hello";

console.log(string1.charAt(0)) // H
console.log(string1.charAt(1)) // e
console.log(string1.charAt(2)) // l
console.log(string1.charAt(3)) // l
console.log(string1.charAt(4)) // o

// charCodeAt and fromCharCode
// First returns the unicode number, 2nd returns the character
var string2 = "Hello World";

console.log(string2.charCodeAt(3)) //(l) 108
console.log(String.fromCharCode(string2.charCodeAt(3) + 1)) // m  

// toUpperCase and toLowerCase
console.log(string1.toUpperCase()) // HELLO

console.log(string1.charAt(0).toLowerCase()) // h

// split
var string3 = "Hello planet Earth";

var arr1 = string3.split("")
console.log(arr1) // [ 'H', 'e', 'l', 'l', 'o', ' ', 'p', 'l', 'a', 'n', 'e', 't', ' ', 'E', 'a', 'r', 't', 'h' ]

var string4 = string3.replace("Earth", "Mars");
console.log(string4) // Hello planet Mars

// substr
// Return a substring of original string 
// from starting position specified in first parameter and going up a certain lengh
var part = string4.substr(6, 8)
console.log(part) // planet M