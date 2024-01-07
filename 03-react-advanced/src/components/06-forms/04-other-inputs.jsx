
import { useState } from 'react';

import { WhiteContainer } from '../Containers';

const frameworks = ['react', 'angular', 'vue', 'svelte'];

function OtherInputs({ id }) {
  return (
    <WhiteContainer specialTitle="Part 6 - Other inputs" idTitle={id}>
      <div>
        <form className='form'>
          <h4>Other Inputs</h4>
          {/* name */}
          <div className='form-row' style={{ textAlign: 'left' }}>
            <label htmlFor='shipping'> Free Shipping </label>
          </div>
          <div className='form-row' style={{ textAlign: 'left' }}>
            <label htmlFor='framework' className='form-label'>
              Framework
            </label>
          </div>
          <button type='submit' className='btn btn-block'>
            submit
          </button>
        </form>
      </div>
    </WhiteContainer>
  );
};
export default OtherInputs;
