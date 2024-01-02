// third modules
import { useState, useEffect } from "react";
// local modules
import { WhiteContainer } from "../Containers";
import Final from "./final/05-useState-gotcha"

function UseStateGotcha({ id }) {
  /*
  * The "functional update", it's mean the dispatch returned by the useState,
  * can recive a function the "functional update" instance of a single value,
  * This function get as a parameter the latest state value, of relationated value
  * in this function, the callback passed to the "setCounter", recive the latest value of "counter"
  */
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [incrementerPressCounter, setIncrementerPressCounter] = useState(0);
  const [componentState, setComponentState] = useState("Loading");
 
  console.log("--------- part1, 05 useState-gotcha");
  useEffect(()=>{ setComponentState("Loaded"); },[]); // update the component state,whe it's full loaded

  function counterUpdater(idCounter) {
    setIncrementerPressCounter(prevState =>{
      setComponentState( prevState > 1 ? "Loading" : "Loaded");
      return prevState -1
    });

    idCounter === "counter"
      ? setCounter(latestCounter => (latestCounter + 1)) /*lateste value*/
      : setCounter2(counter2 + 1) /*is not the latest value*/
    ;

  };
  
  function counterTimeManager (timeToWait, idCounter){
    setTimeout(()=>{
      timeToWait > 0
        ? counterTimeManager((timeToWait -1), idCounter)
        : counterUpdater(idCounter)
      ;
    }, 1000);
  };

  const incrementer = ({ target:{ id, value}}, timeToWait=3) => {
    const idCounter = id.match(/-(\w+)$/)[1];
    setIncrementerPressCounter(latestState => latestState +1)
    setComponentState("Loading");
    counterTimeManager(timeToWait, idCounter);
  };
  

  return(
    <WhiteContainer specialTitle={"Part 1, useState Gotcha"} id={id}>
      <h2>useState "gotcha"</h2>
      <h6>Look at the console</h6>
      <h1>Counter: {counter}, Counter2: {counter2}</h1>
  
      <button id="part1-useState-gotcha-counter" onClick={incrementer} >Increse counter</button>
      <button id="part1-useState-gotcha-counter2" onClick={incrementer} >Increse counter2</button>
  
      {/* animate-fade-in-out, its a class to show momentanealy the componente */}
      {(componentState === "Loading") && <h2 className="animate-fade">Waiting...</h2>}
      
    </WhiteContainer>
  );
};

export default UseStateGotcha;
