import { useState } from 'react';

import { BlackContainer } from "../Containers";


function CodeExample ({ id }){
  const [value, setValue] = useState(0);

  const sayHello = () =>{
    console.log("Hello, from code-example part-2, useEffect");
    // this gou thro an error, becasuse case a re-render thats mean a loop
    setValue(2+3);
  };

  // sayHello(); //This Call it's during the render, and that's, means a infinite loop throw the other function

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
