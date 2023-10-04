import { useState, useEffect } from 'react'
import { Button } from './components/Button/Button.jsx'
import { Input } from './components/Input/Input.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(Number(localStorage.getItem('count')) || 0);
  const [minValue, setMinValue] = useState(localStorage.getItem('minValue') || 0);
  const [maxValue, setMaxValue] = useState(localStorage.getItem('maxValue') || 0);

  useEffect(() => {
    if (count <= Number(minValue)) {
      setCount(Number(minValue))
    } else if (count >= Number(maxValue)) {
      setCount(Number(maxValue))
    }

    localStorage.setItem('count', count.toString())
    localStorage.setItem('minValue', minValue.toString())
    localStorage.setItem('maxValue', maxValue.toString())
  }, [count, minValue, maxValue])


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
