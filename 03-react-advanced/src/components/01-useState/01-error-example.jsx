import { useState } from "react";

import { WhiteContainer } from "../Containers";

/**
 * This is an incorrect componente, where useState is not used, and re-rendering dont apper
 * @param {string} id it's the id for the title section 
 * @returns 
 */
function ErrorExample({ id }){
  // useState is used just for a better experience into GUI, but teorically this part we can't use it
  const [consoleLogsActive, setConsoleLogsActive] = useState(false);
  
  const consolePrinter = (...props) =>{ if(consoleLogsActive) console.log(...props); };

  let count = 0;
  const handleClick = event => {count+=1; consolePrinter(count)};

  return(
    <WhiteContainer specialTitle="Part 1, error state" idTitle={id}>
      <h2>useState error example</h2>
      
      <div>
        <input type="checkbox" checked={consoleLogsActive} onChange={()=>{ setConsoleLogsActive(prevState => !prevState) }}/>
        <label>Console logs <b>{consoleLogsActive? "on":"off"}</b></label>
      </div>
      { consoleLogsActive && <p className="animate-fade">Look at the console</p>}

      <h1>Counter: {count}</h1>
      <button onClick={handleClick}>{" "}+{" "}</button>
    </WhiteContainer>
  );
};

export default ErrorExample;
