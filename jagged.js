// Find the maximum number in a jagged array given below array of numbers?
var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0]; // given
let max = ar[0];

for (let i = 1; i < ar.length; i++) { // outer loop
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
}

console.log(`Maximum number in this jagged array is: ${max}`);
