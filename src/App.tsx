import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MergSort from './components/mergsort'

function App() {

  useEffect(() => {
    resetArray()
  }
    , [])
  const [array, setArray] = useState<number[]>([])

  const resetArray = () => {
    const array: number[] = []
    for (let i = 0; i < 100; i++) {
      array.push(randomIntFromIntervals(10, 1000))
    }
    setArray(array)
    console.log(array)
  }

  const randomIntFromIntervals = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <div className="App">
      <MergSort
        array={array}
      />
    </div>
  )
};

export default App;
