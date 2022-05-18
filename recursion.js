// Create a function that will find the factorial number of [9] using recursion.

function recursion(number) {
    return (number === 1 || number === 0) ? 1 : number * recursion(number - 1);
}

const fact = recursion(9);
console.log(fact);
