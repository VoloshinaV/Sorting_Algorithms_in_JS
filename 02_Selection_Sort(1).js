// Selection Sort Algorithm

function selectionSortAlgorithm(array, compareFunction) {

    function comp(a, b) {
        return a - b;
    }

    let min = 0;
    let index = 0;
    let temp = 0;
    compareFunction = compareFunction || compareFunction;

    for (let i = 0; i < array.length; i++) {
        index = i;
        min = array[i];
        for (let j = i + 1; j < array.length; j++ ) {
            if (compareFunction(min, array[j]) > 0) {
                min = array[j];
                index = j;
            }
        }
        temp = array[i];
        array[i] = min;
        array[index] = temp;
    }
    return array;
}

console.log(selectionSortAlgorithm([3, 6, -5, 0, 33, 78], function(a,b) {return a - b}));               //  [ -5, 0, 3, 6, 33, 78 ];
console.log(selectionSortAlgorithm([38, 6000, 7, 0, 7, 78], function(a,b) {return a - b}));              // [ 0, 7, 7, 38, 78, 6000 ]
console.log(selectionSortAlgorithm([310, -2, -6, -100, -7, -78], function(a,b) {return a - b}));         // [ -100, -78, -7, -6, -2, 310 ]