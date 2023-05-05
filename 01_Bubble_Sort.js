// Bubble Sort Algorithm

function swap(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

function bubbleSortAlgo(arraytest) {
    let len = arraytest.length;
    let i, j, stop;
    for (i = 0; i < len; i++) {
        for (j = 0, stop = len - 1; j < stop; j++) {
            if (arraytest[j] > arraytest[j+1]) {
                swap(arraytest, j, j+1)
            }
        }
    }
    return arraytest;
}

console.log(bubbleSortAlgo([3, 6, -5, 0, 33, 78])); //  [ -5, 0, 3, 6, 33, 78 ];
//console.log(bubbleSortAlgo([38, 6000, 7, 0, 7, 78]));  // [ 0, 7, 7, 38, 78, 6000 ]
//console.log(bubbleSortAlgo([310, -2, -6, -100, -7, -78]));  // [ -100, -78, -7, -6, -2, 310 ]
