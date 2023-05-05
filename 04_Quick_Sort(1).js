function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort([3, 6, -5, 0, 33, 78]));                           // [ -5, 0, 3, 6, 33, 78 ];
console.log(quickSort([38, 6000, 7, 0, 7, 78]));                         // [ 0, 7, 7, 38, 78, 6000 ]
console.log(quickSort([310, -2, -6, -100, -7, -78]));                    // [ -100, -78, -7, -6, -2, 310 ]