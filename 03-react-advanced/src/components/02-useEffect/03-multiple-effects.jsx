import { useState, useEffect } from 'react';

import { BlackContainer } from '../Containers';

function MultipleEffects({ id }) {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  // useEffect(() => {
  //   console.log('hello from first useEffect');
  // }, []);

  // useEffect(() => {
  //   console.log('hello from second useEffect');
  // }, []);
  return (
    <BlackContainer specialTitle="Part 2, useEffect multiple" idTitle={id}>
      <div>
        <h1>value : {value}</h1>
        <button className='btn' onClick={() => setValue(value + 1)}>
          value
        </button>
        <h1>second value : {secondValue}</h1>
        <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>
          second value
        </button>
      </div>
    </BlackContainer>
  );
};
export default MultipleEffects;
