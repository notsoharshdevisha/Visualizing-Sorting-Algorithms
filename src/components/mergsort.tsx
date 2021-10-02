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
  let k = start
  let i = start
  let j = middle + 1
  while (i <= middle && j <= end) {
    animation.push([i, j, null, null])
    animation.push([i, j, null, null])
    if (auxArray[i] <= auxArray[j]) {
      animation.push([k, null, auxArray[i], 1])
      animation.push([k, null, auxArray[i], 1])
      array[k++] = auxArray[i++]
    } else {
      animation.push([k, null, auxArray[j], 1])
      animation.push([k, null, auxArray[j], 1])
      array[k++] = auxArray[j++]
    }
  }
  while (i <= middle) {
    animation.push([k, null, auxArray[i], 1])
    animation.push([k, null, auxArray[i], 1])
    array[k++] = auxArray[i++]
  }
  while (j <= end) {
    animation.push([k, null, auxArray[j], 1])
    animation.push([k, null, auxArray[j], 1])
    array[k++] = auxArray[j++]
  }
}

export function MergSortAnimation(
  animation: number[][],
  bars: HTMLCollectionOf<HTMLElement>,
  delay: number,
  primaryColor: string,
) {
  let animationColorKey = 1
  let swapbarKey = 1
  for (let i = 0; i < animation.length; i++) {
    let [bar1idx, bar2idx, newheight, swapkey] = animation[i]
    setTimeout(() => {
      if (!swapkey) {
        if (animationColorKey === 1) {
          bars[bar1idx].style.backgroundColor = 'orange'
          bars[bar2idx].style.backgroundColor = 'orange'
          animationColorKey--
        } else {
          bars[bar1idx].style.backgroundColor = primaryColor
          bars[bar2idx].style.backgroundColor = primaryColor
          animationColorKey++
        }
      } else {
        if (swapbarKey === 1) {
          bars[bar1idx].style.height = `${newheight}px`
          bars[bar1idx].style.backgroundColor = 'red'
          swapbarKey--
        } else {
          bars[bar1idx].style.backgroundColor = primaryColor
          swapbarKey++
        }
      }
    }, i * delay)
  }
}
