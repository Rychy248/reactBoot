import './counter.css'
import { useState, useRef } from 'react'
import { BlackContainer } from './Containers';

function Counter() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(true);
  const [step, setStep] = useState(1);
  const [manualStep, setManualStep] = useState();

  function handleChange({ target:{ id, value }, key }) {
    const operations = {
      /**
       * Update the step to a new value depending if is an substract or an add
       */
      UpdateStep(){
        setStep(prevStep => prevStep + Number((id == "substract") ? -1 : 1));
      },

      UpdateStepAndResetManualStepAndRef(){
        setStep(Number(value));
        setManualStep(undefined); // Restablecer a undefined en lugar de 0
        inputRef.current.blur(); // Quitar el foco
      },

      UpdateManualStep(){
        setManualStep(Number(value));
      },

      Reset(){
        setStep(1);
        setCount(0);
        setManualStep(undefined);
        setIncrement(true);
      },

      InvertActualStep:()=>{
        setIncrement(!increment);
        setStep((-1 * step));
      },

      IncremetCounter:()=>{
        setCount((prevCount) => prevCount + step);
      }

    };

    if (["substract","add"].includes(id)){ operations.UpdateStep();
    } else if (id === "manual-step" && key === "Enter"){ operations.UpdateStepAndResetManualStepAndRef();
    } else if (id === "manual-step"){ operations.UpdateManualStep();
    } else if (id === "reset"){ operations.Reset();
    } else if (id === "display-step"){ operations.InvertActualStep();
    } else if (id === "counter"){ operations.IncremetCounter();
    };
      return 0;
  };

  return (
    <BlackContainer>
        <h1>Counter</h1>
        <p>
        Press the counter, to increment it <br/>
        Press the second box to switch negative or positive steps <br/>
        Press enter into manual step input, for set the value
        </p>
        
        <button id='counter' onClick={handleChange}> {count} </button>
        
        <div>
          <button id="substract" className="button-operator" onClick={handleChange}> - </button>
          <button id="display-step" className='display-step' onClick={handleChange} > {step} </button>
          <button id="add" className="button-operator" onClick={handleChange}> + </button>
        </div>

        <input id="manual-step" type='number' placeholder='manual step' ref={inputRef} value={manualStep === undefined ? '' : manualStep} onKeyDownCapture={handleChange} onChange={handleChange} ></input>
        
        <div>
          <button id="reset" onClick={handleChange} > Reset </button>
        </div>
    </BlackContainer>
  )
}

export default Counter;
