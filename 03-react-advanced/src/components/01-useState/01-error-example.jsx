import { WhiteContainer, BlackContainer } from "../Containers";
import { useState, useEffect } from "react";

function ErrorExample({ id }){
  let count = 0;
  const handleClick = event => {count+=1; console.log(count)};

  return(
    <WhiteContainer specialTitle="Part 1, error state - 1" idTitle={id}>
      <h2>useState error example</h2>
      <p>Look at the console</p>
      <h1>Counter: {count}</h1>
      <button onClick={handleClick}>{" "}+{" "}</button>
    </WhiteContainer>
  );
};

/**
 * This is the correct componente, where useState is used correctly
 * @param {string} id it's the id for the title section 
 * @returns 
 */
function RigthExample({ id }){
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
    <BlackContainer specialTitle="Part 1, error state - 2" idTitle={id}>
      <br/>
      <h4>Title: {title} <br/> otherTitle: {otherTitle}</h4>
      <input id="title" type='text' value={title} onChange={handleInput}></input>
      <input id="text" type='text' value={text} onChange={handleInput}></input>
      <input id="other-title" type='text' value={otherTitle} onChange={handleInput}></input>
      <h2>useState error example, rigth use</h2>
      <h1>Counter: {count}</h1>
      <button onClick={handleClick}>{" "}+{" "}</button>
    </BlackContainer>
  );
};

export {ErrorExample, RigthExample};
