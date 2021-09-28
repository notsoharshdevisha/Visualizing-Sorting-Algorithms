var array = [243, 342, 423, 2, 52, 25, 232];
function quicksort(array, start, end) {
    if (start < end) {
        var loc = split(array, start, end);
        quicksort(array, start, loc - 1);
        quicksort(array, loc + 1, end);
    }
}
var split = function (array, start, end) {
    var _a, _b;
    var pivot_index = start;
    var pivot = array[pivot_index];
    while (start < end) {
        while ((start <= array.length - 1) && (array[start] <= pivot))
            start++;
        while ((end >= 0) && (array[end] > pivot))
            end--;
        if (start < end)
            _a = [array[end], array[start]], array[start] = _a[0], array[end] = _a[1];
    }
    _b = [array[end], array[pivot_index]], array[pivot_index] = _b[0], array[end] = _b[1];
    return end;
};
console.log(array);
quicksort(array, 0, array.length - 1);
console.log(array);
