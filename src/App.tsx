import React, { useState, useEffect } from 'react';
import './App.css';
import { QuickSort, QuickSortAnimation } from './components/quicksort'
import { BubbleSort, BubbleSortAnimation } from './components/bubblesort'
import { SelectionSort, SelectionSortAnimation } from './components/selectionsort'
import { MergSort, MergSortAnimation } from './components/mergsort'
import { InsertionSort, InsertionSortAnimation } from './components/insertionsort'

function App() {

  const [array, setArray] = useState<number[]>([])
  const [resetArray, setResetArray] = useState<boolean>(true)

  useEffect(() => {
    getArray()
  }
    , [resetArray])

  const getArray = () => {
    const array: number[] = []
    for (let i = 0; i < 50; i++) {
      array.push(randomIntFromIntervals(10, 600))
    }
    setArray(array)
  }

  const randomIntFromIntervals = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const initiateMergSort = () => {
    let animation: number[][] = []
    MergSort(array, animation)
    console.log(animation)
    console.log(array)
    const bars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>
    MergSortAnimation(animation, bars)
  }

  const initiateQuickSort = () => {
    let animation: number[][] = []
    QuickSort(array, 0, array.length - 1, animation)
    setArray(array)
    const bars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>
    QuickSortAnimation(animation, bars)
  }

  const initiateBubbleSort = () => {
    let animation: number[][] = []
    BubbleSort(array, animation)
    setArray(array)
    const bars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>
    BubbleSortAnimation(animation, bars)
  }

  const initiateSelectionSort = () => {
    let animation: number[][] = []
    SelectionSort(array, animation)
    const bars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>
    SelectionSortAnimation(animation, bars)
  }

  const initiateInsertionSort = () => {
    const bars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>
    let animation: number[][] = []
    InsertionSort(array, animation)
    console.log(animation)
    InsertionSortAnimation(animation, bars)
  }

  return (
    <div className="App">

      <div className='app-header'>
        <h3>Sorting Visualizer</h3>
      </div>

      <div className='buttons-container'>
        <button className='button'
          onClick={() => { resetArray ? setResetArray(false) : setResetArray(true) }}
        >Reset Array</button>
        <button className='button'
          onClick={initiateMergSort}
        >MergSort</button>
        <button className='button'
          onClick={initiateQuickSort}
        >QuickSort</button>
        <button className='button'
          onClick={initiateBubbleSort}
        >Bubble Sort</button>
        <button className='button'
          onClick={initiateSelectionSort}
        >Selection Sort</button>
        <button className='button'
          onClick={initiateInsertionSort}
        >InsertionSort</button>
      </div>

      <div className='visualizer-box'>
        {array.map((element) => {
          return (
            <div className='array-bar'
              style={{ height: `${element}px` }}>
            </div>
          )
        })}
      </div>

    </div>
  )
};

export default App;
