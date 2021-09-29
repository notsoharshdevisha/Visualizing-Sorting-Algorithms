function SelectionSort(
  array: number[],
) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex: number = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j
    }
    if (minIndex !== i) [array[i], array[minIndex]] = [array[minIndex], array[i]]
  }
}

let array: number[] = [5, 25, 2, 5, 2, 5, 245, 34]
SelectionSort(array)
console.log(array)
