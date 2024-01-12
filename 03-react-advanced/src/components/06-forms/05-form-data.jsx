import { useState } from 'react';

import {SingleCheckBox, idMakerDecoder, InputRowMaker } from "../tools";
import { BlackContainer } from '../Containers';
/**
 * For this component, the instructor want a form without state controllers, but
 * it's mean, a control or collect of date, using js vanilla in BUTTT
 * i'm going to make a control with objects
 * @param {} param0 
 * @returns 
 */
function UncontrolledInputs({ id }) {
  const [idMaker, idDecoder] = idMakerDecoder("part6-5-object-input-");
  const initialUserState = { name:"", email:"", password:"" };
  
  const [displayForm, setDisplayForm ] = useState(false);
  const [user, setUser] = useState({...initialUserState});

  function handleSubmit(e) {
    e.preventDefault();
    alert(`User To SEND:\nName: ${user.name}\nEmail: ${user.email}\nPassword: :P`);
    setUser({...initialUserState})
  };

  function handlerChange({ target:{ id:fullId, value } }) { 
    setUser(prevUser => ({...prevUser, [idDecoder(fullId)]:value}));
  };

  return (
    <BlackContainer idTitle={id} specialTitle="Part 6 - Fom Data">
      {displayForm || (
        <>
          <br />
          <br />
          <SingleCheckBox checkLabel="Part-6-5-show-Form" check={displayForm} setCheck={setDisplayForm} enrichStyle={{"fontSize":"2rem"}} />
          <br />
          <br />
          <br />
          <br />
        </>
      ) }

      {displayForm && (
        <div className='animate-fade'>
          <form className='form' onSubmit={handleSubmit}>
            <h4>Form Data API</h4>

            <InputRowMaker id={idMaker("name")} displayContent="Name" onChange={handlerChange} value={user.name} />
            <InputRowMaker id={idMaker("email")} displayContent="Email" onChange={handlerChange} value={user.email} type='email' />
            <InputRowMaker id={idMaker("password")} displayContent="Password" onChange={handlerChange} value={user.password} type='password' />

            <button type='submit' className='btn btn-block'> submit </button>

          </form>
        </div>
      )}
    </BlackContainer>
  );
};
export default UncontrolledInputs;
