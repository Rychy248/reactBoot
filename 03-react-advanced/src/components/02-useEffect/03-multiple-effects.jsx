import { useState, useEffect } from 'react';

import { BlackContainer } from '../Containers';

function MultipleEffects({ id }) {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [consoleLogsActive, setConsoleLogsActive] = useState(false);

  const print = (...msg) =>{
    if (consoleLogsActive) console.log(...msg);
  };

  useEffect(() => {
    print(`hello from first useEffect, depended by the first value (${value})`);
  }, [value]);

  useEffect(() => {
    print(`hello from second useEffect, depended by the second value (${secondValue})`);
  }, [secondValue]);

  function onChange({ target:{ id, targetValue }, key, ...props }) {
    const idTarget = id.match(/-(\w+)$/)[1];

    switch (idTarget) {
      case "checkBoxConsole": setConsoleLogsActive(prevState => !prevState); break;
    
      default: break;
    }
  };

  function onClick({ target:{ id, targetValue }, key, ...props}) {
    const idTarget = id.match(/-(\w+)$/)[1];
    switch (idTarget) {
      case "btnFirst": setValue(value + 1); break;
      case "btnSecond": setSecondValue(secondValue + 1); break;
    
      default:
        break;
    }    
  };
  
  return (
    <BlackContainer specialTitle="Part 2, useEffect multiple" idTitle={id}>
      <div>
        <input id='useEffect-part2-3-multiply-checkBoxConsole' type='checkbox' checked={consoleLogsActive} onChange={onChange} />
        <label>Console.logs = { consoleLogsActive ? "active" : "unnactive" }</label>
      </div>
      <div>
        <h1>value : {value}</h1>
        <button
          id='useEffect-part2-3-multiply-btnFirst'
          className='btn' onClick={onClick}>
          value
        </button>
        
        <h1>second value : {secondValue}</h1>
        <button
          id='useEffect-part2-3-multiply-btnSecond'
          className='btn' onClick={onClick}>
          second value
        </button>
      </div>
    </BlackContainer>
  );
};
export default MultipleEffects;
