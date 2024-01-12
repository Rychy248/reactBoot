import { useEffect, useRef, useState } from 'react';

import { idMakerDecoder, InputRowMakerByUseRef } from "../tools"

import { BlackContainer } from '../Containers';

function UseRefBasics({ id }) {
  const [idMaker, idDecoder] = idMakerDecoder("part7-useEffect-");

  const userNameRef = useRef("");
  const userEmailRef = useRef("");
  const userPasswordRef = useRef("");
  const isMounted = useRef(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    userNameRef.current.focus();
  });

  useEffect(() => {
    //this make that isn't triggered after the initial mount
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log("Hello i'm triggered after a re-render");
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Name Ref: ",userNameRef.current.value);
    console.log("User Email Ref: ", userEmailRef.current.value);
    console.log("User Password Ref: ", userPasswordRef.current.value);};

  return (
    <BlackContainer specialTitle="Part 7 - UseRef" idTitle={ id } >
      <div>
        <div>
          <h1>value : {value}</h1>
          <button onClick={() => setValue(value + 1)} className='btn'>
            increase
          </button>
        </div>

        <form className='form' onSubmit={handleSubmit}>
          <InputRowMakerByUseRef
            id={idMaker("name")}
            displayContent={"Name"}
            useRef={userNameRef}
          />
          <InputRowMakerByUseRef
            id={idMaker("email")}
            displayContent={"Email"}
            useRef={userEmailRef}
            type="email"
          />
          <InputRowMakerByUseRef
            id={idMaker("password")}
            displayContent={"Password"}
            useRef={userPasswordRef}
            type="password"
          />

          <button type='submit' className='btn btn-block'>
            submit
          </button>

        </form>


      </div>
    </BlackContainer>
  );
};

export default UseRefBasics;
