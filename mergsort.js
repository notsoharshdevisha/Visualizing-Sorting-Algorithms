"use strict";
exports.__esModule = true;
exports.MergSort = void 0;
function MergSort(array) {
    if (array.length <= 1)
        return array;
    var auxArray = array.slice();
    Split(array, 0, array.length - 1, auxArray);
}
exports.MergSort = MergSort;
function Split(array, start, end, auxArray) {
    if (start === end)
        return;
    var middle = Math.floor((start + end) / 2);
    Split(auxArray, start, middle, array);
    Split(auxArray, middle + 1, end, array);
    merge(array, start, middle, end, auxArray);
}
function merge(array, start, middle, end, auxArray) {
    var k = start;
    var i = start;
    var j = middle + 1;
    while (i <= middle && j <= end) {
        if (auxArray[i] <= auxArray[j]) {
            array[k++] = auxArray[i++];
        }
        else {
            array[k++] = auxArray[j++];
        }
    }
    while (i <= middle) {
        array[k++] = auxArray[i++];
    }
    while (j <= end) {
        array[k++] = auxArray[j++];
    }
}
var array = [5, 4, 3, 2, 1];
MergSort(array);
console.log(array);
