function quickSort(array, start=0, end=array.length-1) {
    if (end - start < 0) {
        return;
    }
    var p = partition(array, start, end);
    quickSort(array, start, p - 1);
    quickSort(array, p + 1, end);
    return;
}
function partition(array, start, end) {
    var p = end;
    var w = start;
    for (var i = start; i < p; i++) {
        if (array[i] < array[p]) {
            swap(array, w++, i);
        }
    }
    swap(array, w, p);
    return w;
}
function swap(arr, first, second) {
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

module.exports = quickSort;