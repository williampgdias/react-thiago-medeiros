import React, { useState, useEffect } from "react";

import Template from "./Template";

import './Counter.css';

const Counter = () => {
  const  [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   fetch()
  // }, [])

  const handleOnClick = operator => {
    const newValue = operator === '+'
      ? counter + 1
      : counter -1;

    setCounter(newValue);
  }

  return (
    <Template title='Counter'>
      <div className="counter">
        <span>{ counter }</span>
        <button onClick={ () => handleOnClick('-') }>-</button>
        <button onClick={ () => handleOnClick('+') }>+</button>
      </div>
    </Template>
  )
}

export default Counter;