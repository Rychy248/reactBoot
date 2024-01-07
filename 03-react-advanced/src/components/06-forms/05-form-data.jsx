import { useState } from 'react';

import { BlackContainer } from '../Containers';

function UncontrolledInputs({ id }) {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <BlackContainer idTitle={id} specialTitle="Part 6 - For Data">
      <div>
        <form className='form' onSubmit={handleSubmit}>
          <h4>Form Data API</h4>
          {/* name */}
          <div className='form-row'>
            <label htmlFor='name' className='form-label'>
              name
            </label>
            <input type='text' className='form-input' id='part6-05-form-input-name' name='name' />
          </div>
          {/* email */}
          <div className='form-row'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input type='email' className='form-input' id='part6-05-form-input-email' name='email' />
          </div>
          {/* email */}
          <div className='form-row'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-input'
              id='part6-05-form-input-password'
              name='password'
            />
          </div>

          <button type='submit' className='btn btn-block'>
            submit
          </button>
        </form>
      </div>
    </BlackContainer>
  );
};
export default UncontrolledInputs;
