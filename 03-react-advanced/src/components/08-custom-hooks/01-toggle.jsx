
import { useState } from 'react';

import { BlackContainer } from "../Containers";

function ToggleExample({ id }) {
  const [show, setShow] = useState(false);
  return (
    <BlackContainer specialTitle="Part 8 Custom Hooks - Toggle" idTitle={ id } >
      <div>
        <h4>toggle custom hook</h4>
        <button className='btn' onClick={() => setShow(!show)}>
          toggle
        </button>
        {show && <h4>some stuff</h4>}
      </div>
    </BlackContainer>
  );
};
export default ToggleExample;
