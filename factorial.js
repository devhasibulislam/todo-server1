// Create a function that will find the factorial number of [9] using recursion.

function factorial(number) {
    return (number === 1 || number === 0) ? 1 : number * factorial(number - 1);
}

const fact = factorial(9);
console.log(fact);
