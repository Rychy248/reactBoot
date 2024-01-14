import { useState } from 'react';
// local data
import { data } from '../../data.js';

// local components
import Form from './Form.jsx';
import List from './List';
import { BlackContainer } from "../../Containers";
import { useBoolean } from "../../customHooks";
import { SingleCheckBox } from "../../tools";


function LowerStateChallenge({ id }) {
  const [people, setPeople] = useState(data);
  const [consoleLogsActive, toggleConsoleLogsActive] = useBoolean(false);

  const printLine = (propsToPrint) => { if(consoleLogsActive) console.log(...propsToPrint); };
  printLine("First RENDER");
  printLine("Re-render");

  /**
   * This function cause a change-state of the People, and that's triggered a re-render inside
   * of this component an of all children components
   * @param { string } newName the new name to add to the people list
   */
  const addPerson = (newName) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name:newName };
    setPeople([...people, newPerson]);
  };

  return (
    <section>
      <BlackContainer id={ id } specialTitle="Part 11 Performance - Lower state Challenge">
        <SingleCheckBox checkLabel="Console Logs active" check={consoleLogsActive} toggleCheck={toggleConsoleLogsActive}/>
        {/* //For each type into the input, it's make a re-render, if that input
        /** there's inside this component, it's mean render it and all his children
        /** that's why separate this in other component, and render only in final input, made a re-render only
        /** when a person is added
         */}
        <Form printLine={printLine} addPerson={addPerson} />

        <List people={people} />

      </BlackContainer>
    </section>
  );
};
export default LowerStateChallenge;
