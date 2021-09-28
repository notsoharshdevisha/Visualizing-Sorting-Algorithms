let array = [5, 4, 3, 2, 1]

function MergSort(array) {
  if (array.length <= 1) return array;
  const auxArray = array.slice();
  split(array, 0, array.length - 1, auxArray,);
  return;
}

function split(array, start, end, auxArray) {
  if (start === end) return;
  const middle = Math.floor((start + end) / 2);
  split(auxArray, start, middle, array,);
  split(auxArray, middle + 1, end, array,);
  merge(array, start, middle, end, auxArray,);
}

function merge(
  array,
  start,
  middle,
  end,
  auxArray,
) {
  let k = start;
  let i = start;
  let j = middle + 1;
  while (i <= middle && j <= end) {
    if (auxArray[i] <= auxArray[j]) {
      array[k++] = auxArray[i++];
    } else {
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

MergSort(array)
console.log(array)
