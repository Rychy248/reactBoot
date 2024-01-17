import { useState } from 'react';

// local components
import styles from "./containers.module.css";
import { BlackContainer } from "../../Containers";
import { SingleCheckBox } from "../../tools";

import ComponentA from './ComponentA/ComponentA';

function LowerState({ id }) {
  const [printConsoleLogs, setPrintConsoleLogs] = useState(false);
  const printLine = (props) =>{ if(printConsoleLogs) console.log(...props); };

  printLine("Memo function, app rendered");
  return (
    <BlackContainer specialTitle="Part 11 Performance - Function memo" idTitle={id}> 
      <SingleCheckBox checkLabel="Console logs active" check={printConsoleLogs} setCheck={setPrintConsoleLogs} />
      
      <div className={styles["container"]}>
        <div className={styles["item-a"]}>
          <ComponentA  printLine={printLine} />
        </div>
        <div className={styles["item-b"]}>
          
        </div>

      </div>
    </BlackContainer>
  );
};

export default LowerState;
