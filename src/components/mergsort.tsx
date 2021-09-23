import React from 'react';

export function mergSort(
  array: number[],
  animation: number[][]
) {
  const auxArray = array.slice()
  recursiveSplit(0, array.length - 1, array, auxArray, animation)
}

const recursiveSplit = (
  startIdx: number,
  endIdx: number,
  array: number[],
  auxArray: number[],
  animation: number[][]
) => {
  if (startIdx === endIdx) return
  const middleIdx = Math.floor((startIdx + endIdx) / 2)
  recursiveSplit(startIdx, middleIdx, array, auxArray, animation)
  recursiveSplit(middleIdx + 1, endIdx, array, auxArray, animation)
  merge(startIdx, middleIdx, endIdx, array, auxArray, animation)
}

const merge = (
  startIdx: number,
  middleIdx: number,
  endIdx: number,
  array: number[],
  auxArray: number[],
  animation: number[][]
) => {
  let k = startIdx
  let i = startIdx
  let j = endIdx
  while (i <= middleIdx && j <= endIdx) {
    if (auxArray[i] <= auxArray[j]) {
      array[k++] = auxArray[i++]
      animation.push([k, auxArray[i]])
    } else {
      animation.push([k, auxArray[j]])
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

export function performAnimation(
  animation: number[][],
) {

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
