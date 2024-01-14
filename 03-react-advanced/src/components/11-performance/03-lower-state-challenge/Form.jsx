import { useState } from 'react';

import { idMakerDecoder, InputRowMaker } from "../../tools"

function Form({ printLine, addPerson }) {
  const [name, setName] = useState('');

  const [idMaker, idDecoder] = idMakerDecoder("part11-lower-state-challenge-");

  printLine("FORM, Re-render");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('Please Provide Name Value');
      return;
    }
    // When the submit button is pressed, the function, passed by prop drilling
    // is reached and this cause into the father a change of his state, that's why all of the components
    // related to the index.jsx, parent of this component, Form.jsx, is re-render
    addPerson(name);
    setName('');
  };

  return(
    <form className='form' onSubmit={handleSubmit}>
        {/* HERE IS THE INPUT WITH THE RE-RENDER
        /** this input, cause a re-render every type something is typing inside
        /** BUT, only render this component because the "name state" is using only here
        /** if this is re-render all his children too, that's why, InputRowMaker, is re-render too
        /** but this is better than a re-render of all the index > parent of this Form.jsx
        /**
        /** This triggered a re-render of his parent whe the submit button is pressed, why?
        */}
      <InputRowMaker
        id={idMaker("name")}
        displayContent="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className='btn btn-block' type='submit'>
        submit
      </button>
    </form>
  );
};

export default Form;