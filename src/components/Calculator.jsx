import React, { useState } from 'react';
import '../styles/calculator.css'

export function Calculator() {
  const [ number, setNumber ] = useState(0);
  const [ oldNumber, setOldNumber ] = useState();
  const [ operator, setOperator ] = useState();

  function handleNumber(props) {
    setNumber(number + props.target.value)
    if(number === 0) {
      setNumber(props.target.value)
    }
  }

  function clearNumber() {
    setNumber(0)
    setOldNumber()
    setOperator()
  }

  function handlePercentage() {
    setNumber(number / 100)
  }

  function handleMoreOrLess() {
    if(number>0) {
      setNumber(-number)
    } else {
      setNumber(Math.abs(number))
    }
  }

  function handleOperator(e) {
    setOperator(e.target.value);
    setOldNumber(number);
    setNumber(0);
  }

  function handleCalculate() {
    if(operator === "/") {
      setNumber(parseFloat(oldNumber) / parseFloat(number))

    } else if(operator === "X") {
      setNumber(parseFloat(oldNumber) * parseFloat(number))

    } else if(operator === "-") {
      setNumber(parseFloat(oldNumber) - parseFloat(number))

    } else if(operator === "+") {
      setNumber(parseFloat(oldNumber)  + parseFloat(number))
    }
  }

  return (
    <div className="container">
      
      <div className="wrapper">
        <h4>{oldNumber} {operator}</h4>
        <h1>{number}</h1>

        <button onClick={clearNumber}>AC</button>
        <button onClick={handleMoreOrLess}>+/-</button>
        <button onClick={handlePercentage}>%</button> 
        <button onClick={handleOperator} value="/">/</button>

        <button onClick={handleNumber} value="7">7</button>
        <button onClick={handleNumber} value="8">8</button>
        <button onClick={handleNumber} value="9">9</button>

        <button onClick={handleOperator} value="X">X</button>

        <button onClick={handleNumber} value="4">4</button>
        <button onClick={handleNumber} value="5">5</button>
        <button onClick={handleNumber} value="6">6</button>

        <button onClick={handleOperator} value="-">-</button>

        <button onClick={handleNumber} value="1">1</button>
        <button onClick={handleNumber} value="2">2</button>
        <button onClick={handleNumber} value="3">3</button>
        
        <button onClick={handleOperator} value="+">+</button>
        
        <button id="zero" onClick={handleNumber} value="0">0</button>
        <button onClick={handleNumber} value=".">.</button>
        <button onClick={handleCalculate}>=</button>
        
      </div>
    </div>
  );
}