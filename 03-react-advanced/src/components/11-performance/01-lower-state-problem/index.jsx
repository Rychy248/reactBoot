// third modules
import { useState } from 'react';
// local data
import { data } from '../../data.js';
// custom hooks
import { useBoolean } from "../../customHooks/index.js"
// components
import List from './List.jsx';

import { BlackContainer } from "../../Containers.jsx"
import { SingleCheckBox } from "../../tools/index.jsx"


function LowerState({ id }) {
  const [count, setCount] = useState(0);

  const [people, setPeople] = useState(data);
  const [consoleLogsActive, toggleConsoleLogsActive] = useBoolean(false);
  

  const printLine = (propsToPrint) => { if(consoleLogsActive) console.log(...propsToPrint); };
  printLine("Hello from index, re-render");

  /**AT THIS PROBLEM, THE RENDER HAPPEN BECAUSE THE "Count value" change
   * And all child of this component will be render because the parent has re-render
   * Why?? if my Person or List, didn't change, no matter, the paren has rendered all his children too
   */
  return (
    <section>
      <BlackContainer idTitle={ id } specialTitle="Part 11 Performance - lower state problem">
        <br />
        <SingleCheckBox checkLabel="Console Logs" check={consoleLogsActive} toggleCheck={toggleConsoleLogsActive}/>
        
        <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
        >
          count {count}
        </button>

        <List people={people} printLine={printLine}/>

      </BlackContainer>
    </section>
  );
};

export default LowerState;
