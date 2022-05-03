import React, { useState, useEffect } from 'react';

import './Counter.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('rendered')
  }, [counter]);

  const handleOnClick = operator => {
    const newValue = operator === '+' 
      ? counter + 1
      : counter - 1
    setCounter(newValue);
  }

  return (
      <div className='counter'>
        <span>{ counter }</span>
        <button onClick={() => handleOnClick('-')}>-</button>
        <button onClick={() => handleOnClick('+')}>+</button>
      </div>
  )
}

export default Counter;