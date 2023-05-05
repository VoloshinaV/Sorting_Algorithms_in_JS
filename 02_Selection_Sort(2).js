function selectionSort(inputArr) {    
    for(let i = 0; i < inputArr.length; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < inputArr.length; j++){
            if(inputArr[j] < inputArr[min]) {
                min = j; 
            }
         }
         if (min != i) {
            // Swapping the elements
            let temp = inputArr[i]; 
            inputArr[i] = inputArr[min];
            inputArr[min] = temp;      
        }
    }
    return inputArr;
}

console.log(selectionSort([3, 6, -5, 0, 33, 78])); //  [ -5, 0, 3, 6, 33, 78 ];
console.log(selectionSort([38, 6000, 7, 0, 7, 78]));  // [ 0, 7, 7, 38, 78, 6000 ]
console.log(selectionSort([310, -2, -6, -100, -7, -78]));  // [ -100, -78, -7, -6, -2, 310 ]