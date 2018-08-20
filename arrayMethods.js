// (1) Create an array of numbers and save the array to a variable
// (2) Iterate through the array using a loop
// (3) Create a function that will multiply each number in the array by two
// (4) Pass each number in the array to this function
// (5) Save the original numbers and the doubled results as key-value pairs in an object

let arr = [1, 3, 8, 10, 56]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

timesTwo = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] * 2)
    }
}

timesTwo(arr)

arr.forEach(num => {
    console.log(num * 2)
})

var obj = {};

for (let i = 0; i < arr.length; i++) {

    var key = arr[i].toString();

    var value = arr[i] * 2

    obj[key] = value;
}

console.log(obj)
