import React, { useState, useEffect } from 'react';
import './App.css';
import { MergSortVisualizer } from './components/mergsort'

function App() {

  useEffect(() => {
    resetArray()
  }
    , [])
  const [array, setArray] = useState<number[]>([])

  const resetArray = () => {
    const array: number[] = []
    for (let i = 0; i < 100; i++) {
      array.push(randomIntFromIntervals(10, 800))
    }
    setArray(array)
    console.log(array)
  }

  const randomIntFromIntervals = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <div className="App">
      <div className='app-header'>
        <h3>Sorting Visualizer</h3>
      </div>
      <MergSortVisualizer
        array={array}
      />
    </div>
  )
};

export default App;
