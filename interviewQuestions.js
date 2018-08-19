let x = {
    a: 1, 
    b: 2
};

// create an array where the contents are a & b
const array = [];

for ( i in x ) {
    array.push(i)
}

console.log(array)

let y = "hi";

// create a new variable (let z = "ih")

const stringReversal = (str) => {
    return str.split("").reverse().join("");
}

console.log(stringReversal("hi"))

const obj = {
    a:1 ,
    b: 2 ,
    getA() {
        console.log(this.a)
        return this  
    },
    getB() {
        console.log(this.b)
    }
};

obj.getA().getB(); // what would need to be added to the object methods for this call to work?

// [1,2].print(); // 1,2

// Array.prototype.print = () => {
//     let result = '';
//     this.forEach(element => result += `${element} `,
//         console.log(result))
// }

// [1,2].print(); // 1,2