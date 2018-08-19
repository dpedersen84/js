// Regular expressions are a pattern you define that are then searched for in a string.
// You can modify, replace, or remove the patter from the string

var pattern = /(a|b|c)/gi
// The pattern above looks for an a, b, or c character
// g means to globally find all matches, not just the first
// i specifies the search to be case insensitive


// replace the 'a' character with a '4' everywhere in the string
var str = "An apple was eaten";
console.log(str.replace(/a/gi, "4")); //4n 4pple w4s e4ten

// replace all numbers with x's
var str2 = 'My phone number is 651-788-0671';
console.log(str2.replace(/[0-9]/gi, "x")); // My phone number is xxx-xxx-xxxx 

// find the position in the string where the character A is exactly 2 spaces away from B
var str3 = "ABxxAxxB"
console.log(str3.search(/A..B/gi)) // 4

// character B is 5 spaces away from B
console.log(str3.search(/B.....B/gi)) // 1
