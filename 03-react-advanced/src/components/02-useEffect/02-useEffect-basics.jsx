import { useState, useEffect } from 'react';

import { WhiteContainer } from '../Containers';

function UseEffectBasics({ id }) {
  const [varOne, setVarOne] = useState(0);
  const [counter, setCounter] = useState(0);
  const [consoleLogsActive, setConsoleLogsActive] = useState(false);

  //Use effect, take 2 parameters:
  //------------------------------ The first a callback, where can't return a promise
  //------------------------------ The second is the dependence, who can an array, if it's empty, this use Effect will be render just in the initial-render, its mean one time
  
  useEffect(()=>{
    if (consoleLogsActive) console.log("INITAL RENDER TRIGERED"); ;
  },[]); //an empty render, this just be triggered, at the first render or initial-render
  
  useEffect(()=>{
    if (consoleLogsActive)  console.log("Triggered by each render"); ;
  }); //without any dependece, this was triggered by eache render
  //----- each update into the component state, means render, when whatever button was presed, for example the valueOneIncrement, a re-render its produced
  
  useEffect(()=>{
    if (consoleLogsActive) console.log("Triggered by the counter var change"); ;
  }, [counter]);// this was triggered when the dependece has any change

  const sayHello = () => {
    if (consoleLogsActive) console.log('hello there'); ;
  };
  // sayHello();


  function handlerOperations({ target:{ id, value }, ...restProps}){
    const operations = {
      varOneIncrement(){
        setVarOne(varOne + 1);
      },

      counterIncrement(){
          setCounter( counter + 10);
      },

      checkBoxLogsActiveRefPrinter(){
          console.log("value: ", value);
          console.log("RESTPROPS: ", restProps);
          console.log("checkBoxLogsActiveRef: ", checkBoxLogsActiveRef);
      }
    };
    
    switch (id) {
      case "useEffect-part2-2-basics-varOneBtn": operations.varOneIncrement(); break;
      case "useEffect-part2-2-basics-counterBtn": operations.counterIncrement(); break;
      case "useEffect-part2-2-basics-checkBoxConsole": operations.checkBoxLogsActiveRefPrinter(); break;
    
      default: break;
    };
  };

  function handlerChange({ target:{ id, value }, ...restProps}) {
    const operations = {
      checBoxConsoleLogsActive(){
        setConsoleLogsActive(prev => !prev);
      }
    };

    switch (id) {
      case "useEffect-part2-2-basics-checkBoxConsole": operations.checBoxConsoleLogsActive(); break;

      default: break;
    }
  };

  // function onLinkClick(e) { checkBoxLogsActiveRef.current.checked = false; };
  return (
    <WhiteContainer  specialTitle="Part 2, useEffect Bassics" idTitle={id}>
      <div>

        <h2>varOne : {varOne}</h2>
        <h2>Counter : {counter}</h2>

        <button id='useEffect-part2-2-basics-varOneBtn' className='btn' onClick={handlerOperations}>
          click me
        </button>
        <button id='useEffect-part2-2-basics-counterBtn' className='btn' onClick={handlerOperations}>
          Counter increment by 10
        </button>

        
        <div>
          <input id='useEffect-part2-2-basics-checkBoxConsole' type='checkbox' onChange={handlerChange} checked={consoleLogsActive}/>
          <label>Console.logs = {consoleLogsActive ? "active" : "desactive"}</label>
          <p>(for this component) </p>
        </div>

      </div>
    </WhiteContainer>
  );
};

export default UseEffectBasics;
