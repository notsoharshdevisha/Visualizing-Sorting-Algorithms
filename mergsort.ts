export function MergSort(
  array: number[],
) {
  if (array.length <= 1) return array
  const auxArray = array.slice()
  Split(array, 0, array.length - 1, auxArray)
}

function Split(
  array: number[],
  start: number,
  end: number,
  auxArray: number[],
) {
  if (start === end) return
  const middle = Math.floor((start + end) / 2)
  Split(auxArray, start, middle, array)
  Split(auxArray, middle + 1, end, array)
  merge(array, start, middle, end, auxArray)
}

function merge(
  array: number[],
  start: number,
  middle: number,
  end: number,
  auxArray: number[],
) {
  let k = start
  let i = start
  let j = middle + 1
  while (i <= middle && j <= end) {
    if (auxArray[i] <= auxArray[j]) {
      array[k++] = auxArray[i++]
    } else {
      array[k++] = auxArray[j++]
    }
  }
  while (i <= middle) {
    array[k++] = auxArray[i++]
  }
  while (j <= end) {
    array[k++] = auxArray[j++]
  }
}

let array = [5, 4, 3, 2, 1]
MergSort(array)
console.log(array)
