import { useState, useEffect } from 'react';
import { BlackContainer } from '../Containers';

function ComponentBase({ children, id}) {
  return (
    <BlackContainer specialTitle="Part 3, Hooks Rules" idTitle={id}>
      {children}
    </BlackContainer>
  );
}
/**
 * - DON'T ADD fetchData to dependency array !!!
 * - IT WILL TRIGGER INFINITE LOOP !!!
 * #### DON'T CALL HOOKS CONDITIONALLY
 * 
 * @param {*} param0 
 * @returns 
 */
function Example({ id }) {
  const [condition, setCondition] = useState(true);
  if (condition) {
    // won't work
    const [state, setState] = useState(false);
  }

  if (condition) { //earlier return
    return(
      <ComponentBase id={id}>
        <h2>Hello There, by earlier return</h2>
      </ComponentBase>
    );
  }
  // this console log  will also fail, beacause was triggered (with condition = true) a earlier return
  useEffect(() => {
    console.log('hello there');
  }, []);
  
  return(
    <ComponentBase id={id}>
      <h2>example</h2>
    </ComponentBase>
  );
};


function jsVanillaTopics( ) {
  /**
   * #### Truthy and Falsy Values (optional)
  Vanilla JS

  In JavaScript, a value is considered "truthy" if it is evaluated to true when used in a boolean context. A value is considered "falsy" if it is evaluated to false when used in a boolean context.

  Here is a list of values that are considered falsy in JavaScript:

  false
  0 (zero)
  "" (empty string)
  null
  undefined
  NaN (Not a Number)
  All other values, including objects and arrays, are considered truthy.

  For example:
   */
    const x = 'Hello';
    const y = '';
    const z = 0;

    if (x) {
      // console.log('x is truthy');
}

    if (y) {
      // console.log('y is truthy');
    } else {
      // console.log('y is falsy');
    }

    if (z) {
      // console.log('z is truthy');
    } else {
      // console.log('z is falsy');
    }

// Output:
// "x is truthy"
// "y is falsy"
// "z is falsy"
  
};

export default Example;
