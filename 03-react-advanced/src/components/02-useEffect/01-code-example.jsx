import { useState } from 'react';

import { BlackContainer } from "../Containers";


function CodeExample ({ id }){
  const [value, setValue] = useState(0);

  return (
    <BlackContainer specialTitle="Part 2, useEffect Example" idTitle={id}>
      <div>
        <h1>value : {value}</h1>
        <button className='btn' onClick={() => setValue(value + 1)}>
          click me
        </button>
      </div>
    </BlackContainer>
  );
};

export default CodeExample;
