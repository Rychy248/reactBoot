import { useState } from 'react';

import { WhiteContainer } from '../Containers';

function UseEffectBasics({ id }) {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log('hello there');
  };

  sayHello();

  return (
    <WhiteContainer  specialTitle="Part 2, useEffect Bassics" idTitle={id}>
      <div>
        <h1>value : {value}</h1>
        <button className='btn' onClick={() => setValue(value + 1)}>
          click me
        </button>
      </div>
    </WhiteContainer>
  );
};

export default UseEffectBasics;
