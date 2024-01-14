// third importations
import { useState } from 'react';
/***
 * THIS IS CREATED FOR REACH A lower state
 */

function Counter({ printLine }) {
  const [count, setCount] = useState(0);
  printLine("COUNTER, re-render");
  return (
    <button
      className='btn'
      onClick={() => setCount(count + 1)}
      style={{ marginBottom: '1rem' }}
    >
      count {count}
    </button>
  ); 
};

export default Counter;