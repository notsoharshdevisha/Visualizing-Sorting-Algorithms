import React, { useState, useEffect } from 'react';
import './App.css';
import { QuickSort, QuickSortAnimation } from './components/quicksort'

function App() {

  const [array, setArray] = useState<number[]>([])
  const [resetArray, setResetArray] = useState<boolean>(true)

  useEffect(() => {
    getArray()
  }
    , [resetArray])

  const getArray = () => {
    const array: number[] = []
    for (let i = 0; i < 5; i++) {
      array.push(randomIntFromIntervals(10, 600))
    }
    setArray(array)
  }

  const randomIntFromIntervals = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  /*
    const initiateMergSort = () => {
      console.log(array)
      MergSort(array)
      console.log(array)
    }
    */

  const initiateQuickSort = () => {
    let animation: number[][] = []
    QuickSort(array, 0, array.length - 1, animation)
    setArray(array)

    const bars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>
    QuickSortAnimation(animation, bars)
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
          onClick={initiateQuickSort}
        >QuickSort</button>
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
