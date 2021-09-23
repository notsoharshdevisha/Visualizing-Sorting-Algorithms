import React from 'react';

export function mergSort(
  array: number[]
) {
  const auxArray = array.slice()
  recursiveSplit(0, array.length - 1, array, auxArray)
}

const recursiveSplit = (
  startIdx: number,
  endIdx: number,
  array: number[],
  auxArray: number[]
) => {
  if (startIdx === endIdx) return
  const middleIdx = Math.floor((startIdx + endIdx) / 2)
  recursiveSplit(startIdx, middleIdx, array, auxArray)
  recursiveSplit(middleIdx + 1, endIdx, array, auxArray)
  merge(startIdx, middleIdx, endIdx, array, auxArray)
}

const merge = (
  startIdx: number,
  middleIdx: number,
  endIdx: number,
  array: number[],
  auxArray: number[]
) => {
  let k = startIdx
  let i = startIdx
  let j = endIdx
  while (i <= middleIdx && j <= endIdx) {
    if (auxArray[i] <= auxArray[j]) {
      array[k++] = auxArray[i++]
    } else {
      array[k++] = auxArray[j++]
    }
  }
  while (i <= middleIdx) {
    array[k++] = auxArray[i++];
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
