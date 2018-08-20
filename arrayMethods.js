// ========================================================================================
// (1) Create an array of numbers and save the array to a variable
// (2) Iterate through the array using a loop
// (3) Create a function that will multiply each number in the array by two
// (4) Pass each number in the array to this function
// (5) Save the original numbers and the doubled results as key-value pairs in an object

let arr = [ 1, 3, 8, 10, 56 ]

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

    // convert to strings because keys must be strings
    var key = arr[i].toString();

    var value = arr[i] * 2

    obj[key] = value;
}

console.log(obj)
// ========================================================================================

// indexOf
var arr2 = [ 1, 2, 100, 12, -2 ]

console.log(arr2.indexOf(100)) // 2
console.log(arr2.indexOf(3)) // returns -1 because the element does not exist

// push and pop
var arr3 = [ 1, 2, 3, 4 ]

arr3.push(5) 
console.log(arr3) // [ 1, 2, 3, 4, 5 ]
arr3.pop() 
console.log(arr3) // [ 1, 2, 3, 4 ]


// shift and unshift
// remove the first element from an array and return that element or add an element to the front of the array
var arr4 = [ 2000, 39, 40, 1000 ];

var first = arr4.shift();
console.log(first) // 2000

arr4.unshift(4000);
console.log(arr4) // [ 4000, 39, 40, 1000 ]

// reverse
var arr5 = [ 1, 2, 100, 12, -10, -1 ]

console.log(arr5.reverse()) // [ -1, -10, 12, 100, 2, 1 ]

// sort
// sort elements in array based on a compare function
console.log(arr5.sort((a,b) => a - b )) // [ -10, -1, 1, 2, 12, 100 ]
console.log(arr5.sort((a,b) => b - a )) // [ 100, 12, 2, 1, -1, -10 ]

// slice
// return part of the array specified by two numbers, the start and end indices
var arr6 = [ 1, 2, 3, 100, -1 ]
var cutArr6 = arr6.slice(1, 3)
console.log(cutArr6) // [ 2, 3 ]
