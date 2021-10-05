export function InsertionSort(
  array: number[],
  animation: number[][],
) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i]
    let j = i - 1
    animation.push([i, j, null, null])
    animation.push([i, j, null, null])
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j]
      animation.push([j + 1, null, array[j], 1])
      animation.push([j + 1, null, array[j], 1])
      j--
    }
    array[j + 1] = temp
    animation.push([j + 1, null, temp, 1])
    animation.push([j + 1, null, temp, 1])
  }
}

export function InsertionSortAnimation(
  animation: number[][],
  bars: HTMLCollectionOf<HTMLElement>,
  delay: number,
  primaryColor: string,
) {
  let animationColorKey = 1
  let barswapKey = 1
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
        if (barswapKey == 1) {
          bars[bar1idx].style.backgroundColor = 'red'
          bars[bar1idx].style.height = `${newheight}px`
          barswapKey--
        } else {
          bars[bar1idx].style.backgroundColor = primaryColor
          barswapKey++
        }
      }
    }, i * delay)
  }
}
