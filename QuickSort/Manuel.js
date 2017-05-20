 function quickSort(array) {
    (function recurse(wall, pivot) {
        var beg = wall;
        for (let i = wall; i <= pivot; i++) {
            if (i > wall && array[i] < array[pivot]) {
                //swap and move wall
                [array[i], array[wall]] = [array[wall], array[i]];
                wall++;
            }
            else if (i === wall && array[i] < array[pivot]) {
                //move wall
                wall++;
            }
        }
        //swap wall and pivot
        [array[wall], array[pivot]] = [array[pivot], array[wall]];
        if (wall > beg) {
            recurse(beg, wall - 1);
        }
        if (wall < pivot) {
            recurse(wall + 1, pivot);
        }
    })(0, array.length - 1);
    return array;
}
module.exports = quickSort;