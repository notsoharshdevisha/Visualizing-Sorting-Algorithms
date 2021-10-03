import React, { useState, useEffect } from 'react';
import './App.css';
import { QuickSort, QuickSortAnimation } from './components/quicksort'
import { BubbleSort, BubbleSortAnimation } from './components/bubblesort'
import { SelectionSort, SelectionSortAnimation } from './components/selectionsort'
import { MergSort, MergSortAnimation } from './components/mergsort'
import { InsertionSort, InsertionSortAnimation } from './components/insertionsort'
import { SortedAnimation } from './components/sortedanimation'

function App() {

  const [array, setArray] = useState<number[]>([])
  const [resetArray, setResetArray] = useState<boolean>(true)
  const [_length, setLength] = useState<number>(200)
  const [delay, setDelay] = useState<number>(5)
  const bars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>
  const arraySizeSlider = document.getElementById('array-size-slider') as HTMLInputElement
  const delaySlider = document.getElementById('delay-slider') as HTMLInputElement
  const primaryColor = '#bd8df6'

  useEffect(() => {
    getArray(_length)
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.backgroundColor = primaryColor
    }
  }
    , [resetArray])

  const getArray = (_length: number) => {
    const array: number[] = []
    for (let i = 0; i < _length; i++) {
      array.push(randomIntFromIntervals(10, 600))
    }
    setArray(array)
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.backgroundColor = primaryColor
    }
  }

  const randomIntFromIntervals = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const initiateSorting = (
    algo: string,
  ) => {
    let animation: number[][] = []
    arraySizeSlider.disabled = true
    delaySlider.disabled = true
    switch (algo) {
      case "MergSort":
        MergSort(array, animation)
        MergSortAnimation(animation, bars, delay, primaryColor)
        break
      case "QuickSort":
        QuickSort(array, 0, array.length - 1, animation)
        QuickSortAnimation(animation, bars, delay, primaryColor)
        break
      case "BubbleSort":
        BubbleSort(array, animation)
        BubbleSortAnimation(animation, bars, delay, primaryColor)
        break
      case "InsertionSort":
        InsertionSort(array, animation)
        InsertionSortAnimation(animation, bars, delay, primaryColor)
        break
      case "SelectionSort":
        SelectionSort(array, animation)
        SelectionSortAnimation(animation, bars, delay, primaryColor)
        break
    }
    SortedAnimation(animation.length * delay, bars)
    setTimeout(() => {
      arraySizeSlider.disabled = false
      delaySlider.disabled = false
    }, animation.length * delay)
  }

  const handleSorting = (
    e: any) => {
    const target = e.target as Element
    initiateSorting(target.id)
  }

  const changeArrayLength = (
    event: any
  ) => {
    setLength(parseInt(event.target.value))
    if (resetArray) {
      setResetArray(false)
    } else {
      setResetArray(true)
    }
  }

  return (
    <div className="App">

      <div className='app-header'>
        <h3>Sorting Visualizer</h3>
      </div>
      <div className='for-3d-effect'>
      </div>

      <div className='buttons-container'>
        <button className='button'
          onClick={() => { resetArray ? setResetArray(false) : setResetArray(true) }}
        >Reset Array</button>
        <button className='button'
          id='MergSort'
          onClick={(e) => handleSorting(e)}
        >MergSort</button>
        <button className='button'
          id='QuickSort'
          onClick={(e) => handleSorting(e)}
        >QuickSort</button>
        <button className='button'
          id='BubbleSort'
          onClick={(e) => handleSorting(e)}
        >Bubble Sort</button>
        <button className='button'
          id='SelectionSort'
          onClick={(e) => handleSorting(e)}
        >Selection Sort</button>
        <button className='button'
          id='InsertionSort'
          onClick={(e) => handleSorting(e)}
        >Insertion Sort</button>
      </div>

      <div className='for-3d-effect'>
      </div>

      <div className='slider-container'>
        <label>Array Length:{_length}</label>
        <input className='slider'
          id='array-size-slider'
          type='range'
          min='1'
          max='400'
          value={_length}
          onChange={(e) => { changeArrayLength(e) }}
        />
        <label>Delay(ms): {delay}</label>
        <input className='slider'
          id='delay-slider'
          type='range'
          min='1'
          max='500'
          value={delay}
          onChange={(e) => setDelay(parseInt(e.target.value))}
        />
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
