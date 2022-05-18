//  How to find unique values from an array in sorted order?

function unique(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.indexOf(arr[i]) === -1 && newArr.push(arr[i]);
    }

    newArr.sort(function (a, b) { return a - b });
    console.log(newArr); // printed in ascending order
}

const arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8]; //given
unique(arr);
