import { useState, useCallback } from 'react';
// local data
import { data } from '../../data.js';

// local components
import List from './List';
import { WhiteContainer } from "../../Containers";
/*** MEMO with useCallback */

function LowerState({ id }) {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  // each time this component is render, this function become building from scratch too
  // it's mean, when count change, this component is re-render, and this
  //  function is re-builded, AND... this function is now prop of hte <List /> component
  const deletePerson = useCallback((id, name) => {
    // this need people as dependence to work, because, have directly into a new var the old state
    // and it's keep with old value
    const newPeople = people.filter((person) => (person.id !== id && person.name !== name) );
    setPeople(newPeople);

    // this set Work fine without dependence
    // setPeople(prev => prev.filter((person) => (person.id !== id && person.name !== name) ))
    // this update directly with a callback updater function, so not with copy of the state
    // that's why work without dependence
  }, [people]);
  // similar to useEffect, useCallback, memoize a function and this is only rebuild when
  // the dependencies change, a empty array means it's only rendered when it's mount

  return (
    <WhiteContainer specialTitle="Part 11 Performance - Function memo with useCallback" idTitle={id}> 
      {/* This is a function memo, not the hook useMemo */}
      Note, when you press the counter, only the parent component render is re-render, not the person child
      <section>
        <button
          className='btn'
          onClick={() => setCount(count + 1)}
        >
          count {count}
        </button>

        {/* Previously without the deletePerson, function, this work fine
        The list was rendered, only when people, change, but with deletePerson, 
        it's look like the memo dose't work */}
        <List people={people} deletePerson={deletePerson} />
      </section>
    </WhiteContainer>
  );
};

export default LowerState;
