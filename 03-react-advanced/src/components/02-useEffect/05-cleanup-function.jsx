
import { useEffect, useState } from "react";

import { BlackContainer } from "../Containers";

/**
 * 
 * @param { Bool } logsActive the toogle for console.logs
 * @param  {...any} restProps 
 */
function printLine(logsActive, ...restProps){
  //why consoleLogsActive again?, because the "lexical closure", a function inside another function
  logsActive && console.log(...restProps); 
};


/**
 * 
 * @param { bool } logsActive console.logs active
 * @returns 
 */
function ComponentUseEffectWithCleanUp({logsActive}) {
  useEffect(() => {
    printLine(logsActive, 'Hmm, this is interesting, hi From Component with cleanup into the useEffect');
    printLine(logsActive, 'Component with clenaup useEffect, MOUNTED');

    const intID = setInterval(() => {
      printLine(logsActive, "Hello from COMPONENT intervale with cleaner UP")
    }, 1000);
    
    return () => {
      printLine(logsActive, 'Component with clenaup useEffect, UN-MOUNTED');
      clearInterval(intID)
    };

  }, [logsActive]);

  return <div> <h2>Hello I'm the Component with useEffect</h2> </div> ;
};


/**
 * 
 * @param { bool } logsActive console.logs active
 * @returns 
 */
function ComponentUseEffectWithOutCleanUp({logsActive}) {
  useEffect(() => {
    printLine(logsActive, 'Component withOUT clenaup useEffect, MOUNTED');

    const intID = setInterval(() => {
      printLine(logsActive, "Hello from COMPONENT intervale withOUT cleaner UP")
    }, 1000);
    
    return () => {
      printLine(logsActive, 'Component withOUT clenaup useEffect, UN-MOUNTED, interval no cleared'); 
    };

  }, [logsActive]);

  return <div> <h2>Hello I'm the Component withOUT useEffect</h2> </div> ;
};


/**
 * 
 * @param { Number } id the component identifacator
 * @returns 
 */
function CleanupFunction({ id }) {
  const [consoleLogsActive, setConsoleLogsActive] = useState(false);
  const [internalIntevarlsFlag, setInternalIntevarlsFlag] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (internalIntevarlsFlag) {      
      setInterval(() => {
        printLine(consoleLogsActive, "Hello from intervale without cleaner up")
      }, 2000);
  
      return () => { /*No cleaner up*/};
    };
  }, [consoleLogsActive, internalIntevarlsFlag]); //it's setted the consoleLogsActive, as dependeci because the lexical closure, around the printLine function
  
  useEffect(() => {
    if (internalIntevarlsFlag) {
      const idIntervale = setInterval(() => {
        printLine(consoleLogsActive, "Hello from intervale with cleaner UP")
      }, 1000);
  
      return () => { clearInterval(idIntervale) };
    };
  }, [consoleLogsActive, internalIntevarlsFlag]);

  return(
    <BlackContainer specialTitle="Part 2, useEffect CleanUp Functions" idTitle={id}>
      <div>
        <input type="checkbox" checked={consoleLogsActive} onChange={()=>setConsoleLogsActive(prev => !prev)} />
        <label>Consoles logs {consoleLogsActive ? "on":"off"}</label>
      </div>
      <div>
        <input type="checkbox" checked={internalIntevarlsFlag} onChange={()=>setInternalIntevarlsFlag(prev => !prev)} />
        <label>Internal intervals examples {internalIntevarlsFlag ? "on":"off"}</label>
      </div>

      <h2>cleanup function</h2>

      <p> When more re-renders will doing, more intervales printers become from UseEffets without cleaners, press several times the console logs switch to see how increment the prints at the console from all the useEffects without the clenaer </p>

      <div>
        <button
          className='btn'
          onClick={() => setToggle(prevToogle => !prevToogle)}
        >
          toggle component
        </button>
      </div>
      {toggle && (<>
        <ComponentUseEffectWithCleanUp logsActive={consoleLogsActive} />
        <ComponentUseEffectWithOutCleanUp logsActive={consoleLogsActive} />
      </>)}

    </BlackContainer>
  );
};

export default CleanupFunction;
