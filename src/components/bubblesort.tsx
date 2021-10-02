export function BubbleSort(
  array: number[],
  animation: number[][],
) {
  for (let i = 0; i < array.length - 1; i++) {
    let sortedFlag: number = 1
    for (let j = 0; j < array.length - 1 - i; j++) {
      animation.push([j, j + 1, null, null])
      animation.push([j, j + 1, null, null])
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
        sortedFlag = 0
        animation.push([j, j + 1, array[j], array[j + 1]])
        animation.push([j, j + 1, array[j], array[j + 1]])
      }
    }
    if (sortedFlag === 1) return
  }
}

export function BubbleSortAnimation(
  animation: number[][],
  bars: HTMLCollectionOf<HTMLElement>,
  delay: number,
  primaryColor: string,
) {
  let animationColorKey: number = 1
  let barSwapKey: number = 1
  for (let i = 0; i < animation.length; i++) {
    let [bar1idx, bar2idx, swapBar1idx, swapBar2idx] = animation[i]
    setTimeout(() => {
      if (!swapBar1idx && !swapBar2idx) {
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
        if (barSwapKey == 1) {
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
