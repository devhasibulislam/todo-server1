// Create a function that will find the factorial number of [9] using recursion.

function recursion(number) {
    if (number === 1 || number === 0) {
        return 1;
    } else {
        return number * recursion(number - 1);
    }
}

const fact = recursion(0);
console.log(fact);
