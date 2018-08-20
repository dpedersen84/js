// Returns the remainder after a division

console.log(10 / 6) // 1.6

console.log(10 % 6) // 4


// Convert time to hours : minutes
var time = 126;

var hours = Math.floor(time / 60);
console.log(hours)

var minutes = time % 60;
console.log(minutes)

console.log(hours + ":" + minutes)

// Find out if number is odd or even
function isEven(num) {
    if (num % 2 > 0) {
        return console.log("Odd")
    } else {
        return console.log("Even")
    }
}

isEven(104)