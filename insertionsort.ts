function InsertionSort(
  array: number[],
) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i]
    let j = i - 1
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = temp
  }
}

let array = [5, 3, 4, 2, 1]
console.log(array)
InsertionSort(array)
console.log(array)
