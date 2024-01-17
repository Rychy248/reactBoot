import { useState } from 'react';

// local components
import styles from "./containers.module.css";
import { BlackContainer } from "../../Containers";
import { SingleCheckBox } from "../../tools";

import ComponentAContext from './ComponentA/useComponentAContext';
import ComponentBContext from './ComponentB/useComponentBContext';
import ComponentA from './ComponentA/ComponentA';
import ComponentB from './ComponentB/ComponentB';


function LowerState({ id }) {
  const [printConsoleLogs, setPrintConsoleLogs] = useState(false);
  const printLine = (props) =>{ if(printConsoleLogs) console.log(...props); };

  printLine("Memo function, app rendered");
  return (

    <BlackContainer specialTitle="Part 11 Performance - Function memo" idTitle={id}> 
      <SingleCheckBox checkLabel="Memo Function logs active" check={printConsoleLogs} setCheck={setPrintConsoleLogs} />
        
      <div className={styles["container"]}>
        <ComponentAContext>
          <div className={styles["item-a"]}>
            <ComponentA  />
          </div>
        </ComponentAContext>
        <ComponentBContext>
          <div className={styles["item-b"]}>
            <ComponentB  />
          </div>
        </ComponentBContext>
      </div>
    </BlackContainer>
  );
};

export default LowerState;
