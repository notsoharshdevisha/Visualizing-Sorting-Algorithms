export function bubblesort(
  array: number[],
  animation: number[][],
) {
  for (let i = 0; i < array.length - 1; i++) {
    let flag = 0
    for (let j = 0; j < array.length - 1 - i; j++) {
      animation.push([j, j + 1])
      animation.push([j, j + 1])
      if (array[j] > array[j + 1]) {
        animation.push([j, j + 1])
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
        flag = 1
      }
    }
    if (flag === 0) return
  }
}

let animation: number[][]
let array = [5, 4, 3, 2, 2]
console.log(array)
bubblesort(array, animation)
console.log(array)
