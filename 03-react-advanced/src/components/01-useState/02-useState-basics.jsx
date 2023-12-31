import { BlackContainer } from "../Containers";
import { useState, useEffect } from "react";

/**
 * This is the correct componente, where useState is used correctly
 * @param {string} id it's the id for the title section 
 * @returns 
 */

function UseStateBasics({ id }){
  const [count, setCounter] = useState(0);
  const title = useState("Hello")[0]; // incorrect desdestructure
  const setTitle = useState("Hello")[1]; // incorrect desdestructure
  const stateReturned = useState("Text");
  const text = stateReturned[0];
  const setText = stateReturned[1];
  const [otherTitle, setOtherTitle] = useState("This is other title");
  
  function handleClick(event) {
    setCounter(count+1);
  };

  const handleInput = ({ target:{ id, value }, key }) =>{
    const operations = {
      /**
       * This update dosen't work, becase the desestructure of the state isn't correct
       */
      changeTitle(){ setTitle(value);   },
      /**
       * This update work, using the functions asignations step by step
       */
      changeText(){ setText(value);   },
      /**
       * This update, work, correctly, becase the desestructure is correcto
       */
      changeOtherTitle(){ setOtherTitle(value); }
    }

    if (id === "title"){ operations.changeTitle();
    } else if(id === "text"){ operations.changeText();
    } else if(id === "other-title"){ operations.changeOtherTitle();
    }
  };

  useEffect(()=>{
    setTitle("Hello modificated");
  }, []);

  return(
    <BlackContainer specialTitle="Part 1, useStateBasics" idTitle={id}>
      <br/>
      <h2>useState error example, rigth use</h2>
      <h4>
        {title} <br/>
        {text} <br/>
        {otherTitle}
      </h4>
      <input id="title" type='text' value={title} onChange={handleInput}></input>
      <input id="text" type='text' value={text} onChange={handleInput}></input>
      <input id="other-title" type='text' value={otherTitle} onChange={handleInput}></input>
      <h1>Counter: {count}</h1>
      <button onClick={handleClick}>{" "}+{" "}</button>
    </BlackContainer>
  );
};


export default UseStateBasics;