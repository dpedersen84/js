// Have the function LetterChanges(str) take the str parameter being passed
// and modify it using the following algorithm. Replace every letter in the string
// with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
//Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 


function LetterChanges(str) {

    let capitalized = str.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

    let converted = capitalized.replace(/[a-z]/gi, char => String.fromCharCode(char.charCodeAt() + 1))

    return converted
}

console.log(LetterChanges("This is a test string"));

function NameChanges(name) {

    let capitalized = name.replace(/dan /gi, function(letter) {
        return letter.toUpperCase();
    })

    return capitalized;
}

console.log(NameChanges("This guy Dan is dandy.  They call him dAn Dandy."));