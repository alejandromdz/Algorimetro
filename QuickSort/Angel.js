function quicksort(data, start, end) {
    if (start === undefined || end === undefined) {
        start = 0;
        end = data.length - 1;
    }
    if (start < end) {
        //get split index
        var splitIndex = split(data, start, end);
        //sort left
        quicksort(data, start, splitIndex - 1);
        //sort right
        quicksort(data, splitIndex + 1, end);
    }
      return data;
}
// var testArr = [3, 7, 8, 5, 2, 1, 9, 5, 4];
// var testArr2 = [1, 8, 5, 6, 7, 4, 9, 2];
// var testArr3 = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var testArr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 30];

// quicksort(testArr); 
// quicksort(testArr2); 
// quicksort(testArr3); 
// quicksort(testArr4); 

function split(arr, wall, pivot) {
    var pivotVal = arr[pivot];
    for (wall; wall < pivot; wall) {
        //if wall value is less than pivotValue
        if (arr[wall] > pivotVal) {
            swap(arr, wall, pivot--);
            if (wall != pivot) {
                swap(arr, wall, pivot);
            }
        }
        else {
            wall++;
        }
    }
    return pivot;
}
function swap(list, i0, i1) {
    var hold = list[i0];
    list[i0] = list[i1];
    list[i1] = hold;
}

module.exports = quicksort;
// console.log(testArr4);