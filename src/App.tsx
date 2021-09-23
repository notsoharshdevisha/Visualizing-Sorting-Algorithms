import React, { useState, useEffect } from 'react';
import './App.css';
import { MergSortVisualizer, mergSort, performAnimation } from './components/mergsort'

function App() {

  useEffect(() => {
    resetArray()
  }
    , [])

  const [array, setArray] = useState<number[]>([])
  const [animation, setAnimation] = useState<number[][]>([])

  const resetArray = () => {
    const array: number[] = []
    for (let i = 0; i < 100; i++) {
      array.push(randomIntFromIntervals(10, 800))
    }
    setArray(array)
  }

  const randomIntFromIntervals = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const initiateMergSort = () => {
    mergSort(array, animation)
  }

  return (
    <div className="App">
      <div className='app-header'>
        <h3>Sorting Visualizer</h3>
      </div>
      <div className='buttons'>
        <button onClick={initiateMergSort}>mergsort</button>
      </div>
      <MergSortVisualizer
        array={array}
        animation={animation}
      />
    </div>
  )
};

export default App;
