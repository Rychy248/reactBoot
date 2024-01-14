// third modules
import { useState } from 'react';
// local data
import { data } from '../../data.js';
// custom hooks
import { useBoolean } from "../../customHooks/index.js"
// components
import List from './List.jsx';
import Counter from './Counter.jsx';

import { WhiteContainer } from "../../Containers.jsx"
import { SingleCheckBox } from "../../tools/index.jsx"


function LowerState({ id }) {
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
      <WhiteContainer idTitle={ id } specialTitle="Part 11 Performance - lower state solution">
        <br />
        <SingleCheckBox checkLabel="Console Logs2" check={consoleLogsActive} toggleCheck={toggleConsoleLogsActive}/>
        {/*
        AT FIRST
        ---THE: "const [count, setCount] = useState(0);" was moved to a new Component
        --Then: the component was rendered there and import here, so each time the value suffer a change, this only triggered a re-render inside the counter component
        */}
        <Counter printLine={printLine} />
        <List people={people} printLine={printLine}/>

      </WhiteContainer>
    </section>
  );
};

export default LowerState;
