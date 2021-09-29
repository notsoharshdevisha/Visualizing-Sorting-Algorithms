function SelectionSort(array) {
    var _a;
    for (var i = 0; i < array.length - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] <= array[minIndex])
                minIndex = j;
        }
        if (minIndex !== i)
            _a = [array[minIndex], array[i]], array[i] = _a[0], array[minIndex] = _a[1];
    }
}
var array = [5, 25, 2, 5, 2, 5, 245, 34];
SelectionSort(array);
console.log(array);
