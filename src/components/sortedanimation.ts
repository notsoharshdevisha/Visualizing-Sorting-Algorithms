export function SortedAnimation(
  timeOut: number,
  bars: HTMLCollectionOf<HTMLElement>,
) {
  setTimeout(() => {
    for (let i = 0; i < bars.length; i++) {
      setTimeout(() => {
        bars[i].style.backgroundColor = 'turquoise'
      }, i * 5)
    }
  }, timeOut)
}
