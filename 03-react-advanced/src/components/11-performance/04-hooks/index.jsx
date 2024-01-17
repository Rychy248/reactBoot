import { useState } from 'react';
// local data
import { data } from '../../data.js';

// local components
import List from './List';
import { WhiteContainer } from "../../Containers";

function LowerState({ id }) {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  return (
    <WhiteContainer specialTitle="Part 11 Performance - Function memo" idTitle={id}> 
      {/* This is a function memo, not the hook useMemo */}
      Note, when you press the counter, only the parent component render is re-render, not the person child
      <section>
        <button
          className='btn'
          onClick={() => setCount(count + 1)}
          style={{ marginBottom: '1rem' }}
        >
          count {count}
        </button>
        <List people={people} />
      </section>
    </WhiteContainer>
  );
};

export default LowerState;
