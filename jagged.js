// Find the maximum number in a jagged array given below array of numbers?

/* for (let i = 1; i < ar.length; i++) { // outer loop
    for (let j = 0; j < ar[i].length; j++) { // inner loop 1
        if (ar[i][j].length > 1) {
            for (let k = 0; k < ar[i][j].length; k++) { // inner loop 2
                if (max < ar[i][j][k]) {
                    max = ar[i][j][k];
                }
            }
        } else {
            if (max < ar[i][j]) {
                max = ar[i][j];
            }
        }
    }
} */

// an alternative both works same!

function jagged(arr) {
    for (const number of arr) {
        if (Array.isArray(number)) {
            jagged(number);
        } else {
            if (max < number) {
                max = number;
            }
        }
    }
}

var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0]; // given
let max = 0;
jagged(ar);

console.log(`Maximum number in this jagged array is: ${max}`);
