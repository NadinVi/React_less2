import { useState, useEffect } from 'react'
import { Button } from './components/Button/Button.jsx'
import { Input } from './components/Input/Input.jsx';

import './App.css'


function App() {
  const [count, setCount] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
    localStorage.setItem("minValue", JSON.stringify(minValue));
    localStorage.setItem("maxValue", JSON.stringify(maxValue));
  }, [count, minValue, maxValue]);
  
  useEffect(() => {
    const addCount = JSON.parse(localStorage.getItem("count"));
    if (addCount) {
      setCount(addCount)
    }
    
    const addMinValue = JSON.parse(localStorage.getItem("minValue"));
    if(addMinValue) {
      setMinValue(addMinValue)
    }

    const addMaxValue = JSON.parse(localStorage.getItem("maxValue"));
    if(addMaxValue) {
      setMaxValue(addMaxValue)
    }
  }, []); 

  const handleIncrement = (() => {
      setCount(count + 1); 
  });

  const handleDecrement = (() => {
      setCount(count - 1)
  })

  return (
    <div className="App">
      <Input 
      value={minValue}
      onChange={setMinValue}
      label="Enter min value of count"
    />
     <Input 
      value={maxValue}
      onChange={setMaxValue}
      label="Enter max value of count"
    />
      <Button onClick={handleIncrement} disabled={count >= maxValue}>Plus</Button>
      {count}
      <Button onClick={handleDecrement} disabled={count <= minValue}>Minus</Button>
    </div>
  )
}

export default App
