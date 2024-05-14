// Exercise 2.1 create a expression function for checking if a number is even
const isEvenNum = function (num) {
    if (num % 2 === 0) return "It is even number";
    else return "It is not even number";
}
console.log(isEvenNum(21));
// Exercise 2.2 converts the function from Exercise 2.1 into an arrow function
const EvenNum = num => num % 2 === 0 ? "It is even number" : "It is not even number";
console.log(EvenNum(24));