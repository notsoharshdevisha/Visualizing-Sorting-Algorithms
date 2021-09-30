function InsertionSort(array) {
    for (var i = 1; i < array.length; i++) {
        var temp = array[i];
        var j = i - 1;
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
}
var array = [5, 3, 4, 2, 1];
console.log(array);
InsertionSort(array);
console.log(array);
