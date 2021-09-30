export function SelectionSort(
  array: number[],
  animation: number[][],
) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex: number = i
    for (let j = i + 1; j < array.length; j++) {
      animation.push([minIndex, j, null, null])
      animation.push([minIndex, j, null, null])
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      [array[minIndex], array[i]] = [array[i], array[minIndex]]
      animation.push([minIndex, i, array[minIndex], array[i]])
      animation.push([minIndex, i, array[minIndex], array[i]])
    }
  }
}

export function SelectionSortAnimation(
  animation: number[][],
  bars: HTMLCollectionOf<HTMLElement>,
) {
  let animationColorKey: number = 1
  let barSwapKey: number = 1
  for (let i = 0; i < animation.length; i++) {
    setTimeout(() => {
      let [bar1idx, bar2idx, swapbar1, swapbar2] = animation[i]
      if (!swapbar1 && !swapbar2) {
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
        if (barSwapKey === 1) {
          let bar1height = bars[bar1idx].style.height
          let bar2height = bars[bar2idx].style.height
          bars[bar1idx].style.height = bar2height
          bars[bar2idx].style.height = bar1height
          bars[bar1idx].style.backgroundColor = 'red'
          bars[bar2idx].style.backgroundColor = 'red'
          barSwapKey--
        } else {
          bars[bar1idx].style.backgroundColor = 'turquoise'
          bars[bar2idx].style.backgroundColor = 'turquoise'
          barSwapKey++
        }
      }
    }, i * 1)
  }
}
