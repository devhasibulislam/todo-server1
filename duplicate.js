// Find the counts of duplicates in an array?

function duplicate(arr) {
    arr.sort(function (a, b) { return a - b });
    /* 1 5 5 9 9 13 14 20 22 22 25 48 */

    let available = null, count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== available) {
            if (count > 1) {
                console.log(available + ' -> ' + count + ' times.');
            }
            available = arr[i];
            count = 1;
        } else {
            count++;
        }
    }
    if (count > 0) {
        count > 1 && console.log(available + ' -> ' + count + ' times');
    }
}

const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"];
duplicate(arr);
