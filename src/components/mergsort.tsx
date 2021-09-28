import React from 'react';

export function MergSort(
  array: number[],
) {
  const auxArray = array.slice()
  split(0, array.length - 1, array, auxArray)
}

const split = (
  startIdx: number,
  endIdx: number,
  array: number[],
  auxArray: number[],
) => {
  if (startIdx === endIdx) return
  const middleIdx: number = Math.floor((startIdx + endIdx) / 2)
  split(startIdx, middleIdx, array, auxArray)
  split(middleIdx + 1, endIdx, array, auxArray)
  merg(startIdx, middleIdx, endIdx, array, auxArray)
}

const merg = (
  startIdx: number,
  middleIdx: number,
  endIdx: number,
  array: number[],
  auxArray: number[],
) => {
  let i = startIdx
  let j = middleIdx + 1
  let k = startIdx
  while (i <= middleIdx && j <= endIdx) {
    if (auxArray[i] <= auxArray[j]) {
      array[k++] = auxArray[i++]
    } else {
      array[k++] = auxArray[j++]
    }
  }
  while (i <= middleIdx) {
    array[k++] = auxArray[i++]
  }
  while (j <= endIdx) {
    array[k++] = auxArray[j++]
  }
}

export function MergSortVisualizer(props: any) {

  return (
    <div className="MergSort">
      <div className='array-container'>
        {props.array.map((element: number) => {
          return <div className='array-bar'
            style={{ height: `${element}px` }} ></div>
        })}
      </div>

    </div >
  );
}
