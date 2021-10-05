import React from 'react';

export function QuickSort(
  array: number[],
  start: number,
  end: number,
  animation: number[][],
) {
  if (start < end) {
    const loc: number = split(array, start, end, animation)
    QuickSort(array, start, loc - 1, animation)
    QuickSort(array, loc + 1, end, animation)
  }
}

export function QuickSortAnimation(
  animation: number[][],
  bars: HTMLCollectionOf<HTMLElement>,
  delay: number,
  primaryColor: string,
) {
  let animationColorKey: number = 1
  let barSwapKey: number = 1
  for (let i = 0; i < animation.length; i++) {
    let [bar1idx, bar2idx, swapbar1idx, swapbar2idx] = animation[i]
    setTimeout(() => {
      if (!swapbar1idx && !swapbar2idx) {
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
        if (barSwapKey === 1) {
          let bar1height = bars[bar1idx].style.height
          let bar2height = bars[bar2idx].style.height
          bars[bar1idx].style.height = bar2height
          bars[bar2idx].style.height = bar1height
          bars[bar1idx].style.backgroundColor = 'red'
          bars[bar2idx].style.backgroundColor = 'red'
          barSwapKey--
        } else {
          bars[bar1idx].style.backgroundColor = primaryColor
          bars[bar2idx].style.backgroundColor = primaryColor
          barSwapKey++
        }
      }
    }, i * delay)
  }
}

const split = (
  array: number[],
  start: number,
  end: number,
  animation: number[][],
) => {
  const pivotIndex: number = start
  const pivot: number = array[pivotIndex]

  while (start < end) {

    while (start < array.length && array[start] <= pivot) {
      animation.push([start, pivotIndex, null, null])
      animation.push([start, pivotIndex, null, null])
      start++
    }
    while (end >= 0 && array[end] > pivot) {
      animation.push([pivotIndex, end, null, null])
      animation.push([pivotIndex, end, null, null])
      end--
    }

    if (start < end) {
      [array[start], array[end]] = [array[end], array[start]]
      animation.push([start, end, array[start], array[end]])
      animation.push([start, end, array[start], array[end]])
    }
  }

  [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]]
  animation.push([pivotIndex, end, array[pivotIndex], array[end]])
  animation.push([pivotIndex, end, array[pivotIndex], array[end]])
  return end
}
