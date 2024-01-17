 import { useState } from 'react';
// callback, for memo function
import { useCallback } from 'react';
// useMemo, for mem values, similar to usaCallback, but for values 
import { useMemo } from 'react';
// local data
import { data } from '../../data.js';

// local components
import List from './List';
import { WhiteContainer } from "../../Containers";
import {  SingleCheckBox } from "../../tools"
import SlowFunction from './SlowFunction.jsx';

/*** MEMOIZATION */
function Memoization({ id }) {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState(false);
  
  //PrintLine Function memoized
  const printLine = useCallback(
    props =>{ if(logs){ console.log(`${props}`) } },
    [logs]
  );

  /**SLOW FUNCTION */
  // const value = SlowFunction(); // this is so slow and is triggered, every time the component is re-render
  const value = useMemo(
    SlowFunction,
  []); // similar to Callback, get a callback, and a dependence array, but return the value, not the callback Function
  printLine(value); // now the value is only calculate at the first time, or, when the dependence change

  const deletePerson = useCallback((id, name) => {
    setPeople(prev => prev.filter((person) => (person.id !== id && person.name !== name) ));
  }, []);

  return (
    <WhiteContainer specialTitle="Part 11 Performance - Function memo with useCallback" idTitle={id}> 
      <SingleCheckBox checkLabel="Active memo logs" check={logs} setCheck={setLogs} />      
      
      <section>
        <button
          className='btn'
          onClick={() => setCount(count + 1)}
        >
          count {count}
        </button>
        <List people={people} deletePerson={deletePerson} />
      </section>
    </WhiteContainer>
  );
};

export default Memoization;
