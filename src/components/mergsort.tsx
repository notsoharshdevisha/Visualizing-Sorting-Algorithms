import React from 'react';

export function MergSort(
  array: number[],
  animation: number[][],
) {
  if (array.length <= 1) return array
  const auxArray = array.slice()
  Split(array, 0, array.length - 1, auxArray, animation)
}

function Split(
  array: number[],
  start: number,
  end: number,
  auxArray: number[],
  animation: number[][],
) {
  if (start === end) return
  const middle = Math.floor((start + end) / 2)
  Split(auxArray, start, middle, array, animation)
  Split(auxArray, middle + 1, end, array, animation)
  merge(array, start, middle, end, auxArray, animation)
}

function merge(
  array: number[],
  start: number,
  middle: number,
  end: number,
  auxArray: number[],
  animation: number[][],
) {
  let swapKey = 1
  let k = start
  let i = start
  let j = middle + 1
  while (i <= middle && j <= end) {
    animation.push([i, j, null])
    animation.push([i, j, null])
    if (auxArray[i] <= auxArray[j]) {
      animation.push([i, k, swapKey])
      array[k++] = auxArray[i++]
    } else {
      animation.push([j, k, swapKey])
      array[k++] = auxArray[j++]
    }
  }
  while (i <= middle) {
    animation.push([i, k, swapKey])
    array[k++] = auxArray[i++]
  }
  while (j <= end) {
    animation.push([j, k, swapKey])
    array[k++] = auxArray[j++]
  }
}

export function MergSortAnimation(
  animation: number[][],
  bars: HTMLCollectionOf<HTMLElement>,
) {
  let animationColorKey = 1
  let swapbarKey = 1
  for (let i = 0; i < animation.length; i++) {
    let [bar1idx, bar2idx, swapkey] = animation[i]
    setTimeout(() => {
      if (!swapkey) {
        if (animationColorKey === 1) {
          bars[bar1idx].style.backgroundColor = 'orange'
          bars[bar2idx].style.backgroundColor = 'orange'
          animationColorKey--
        } else {
          bars[bar1idx].style.backgroundColor = 'turquoise'
          bars[bar2idx].style.backgroundColor = 'turquoise'
          animationColorKey++
        }
      } else {
        if (swapbarKey === 1) {
          let newheight = bars[bar1idx].style.height
          bars[bar2idx].style.height = newheight
          bars[bar2idx].style.backgroundColor = 'red'
          swapbarKey--
        } else {
          bars[bar1idx].style.backgroundColor = 'turquoise'
          bars[bar2idx].style.backgroundColor = 'turquoise'
          swapbarKey++
        }
      }
    }, i * 500)
  }
}
