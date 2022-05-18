// Find the maximum number in a jagged array given below array of numbers?

function jagged(arr) {
    for (const number of arr) {
        Array.isArray(number) ? jagged(number) : (max < number) && (max = number);
    }
}

var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0]; // given
let max = 0;
jagged(ar);

console.log(`Maximum number in this jagged array is: ${max}`);
