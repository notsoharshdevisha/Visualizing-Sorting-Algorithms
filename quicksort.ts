var array: number[] = [243, 342, 423, 2, 52, 25, 232]

function quicksort(
  array: number[],
  start: number,
  end: number,
) {
  if (start < end) {
    const loc = split(array, start, end)
    quicksort(array, start, loc - 1)
    quicksort(array, loc + 1, end)
  }
}

const split = (
  array: number[],
  start: number,
  end: number,
) => {
  const pivot_index: number = start
  const pivot: number = array[pivot_index]

  while (start < end) {

    while ((start <= array.length - 1) && (array[start] <= pivot)) start++
    while ((end >= 0) && (array[end] > pivot)) end--

    if (start < end) [array[start], array[end]] = [array[end], array[start]]

  }

  [array[pivot_index], array[end]] = [array[end], array[pivot_index]]

  return end
}

console.log(array)
quicksort(array, 0, array.length - 1)
console.log(array)
