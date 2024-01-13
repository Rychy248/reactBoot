
import useToggleCustomHook from './toggle/useToggleCustomHook';

import { BlackContainer } from "../Containers";


/**
 *--------------------------- RULES 
 * - same rules as regular hooks, You have to use "use", before the custom hook
 * - simplify component (less code)
 * - re-use functionality
 * 
 * To create your own React custom hook, we have to follow certain guidelines. Here is a summary of these rules:
 * - Your custom hook should start with the keyword use, for example, useAuthState, useFetch, etc.
 * - Hooks should be called at the top of the component. We should avoid using hooks inside of a condition or a loop because React will be uncertain about the order of execution of the hooks. React knows about each hook and its associated value via the order of execution of hooks during rendering. It’s expected that at each render, the order of hooks remains the same. In this way, React preserves the state.
 * - Hooks should be called from a function-based component.
 * - You can call one hook from another hook.
 * - Every call to a hook gets an isolated state.
 * 
 */
function ToggleExample({ id, counter=1 }) {

  const [show, toggle] = useToggleCustomHook(false);
  
  return (
    <BlackContainer specialTitle={`Part 8 Custom Hooks - Toggle ${counter}`} idTitle={ (`${id}-${counter}`) } >
      <div>
        
        <h4>toggle custom hook</h4>

        <button className='btn' onClick={toggle}>toggle</button>

        {show && <ToggleExample id={id} counter={(counter + 1)} />}

      </div>
    </BlackContainer>
  );
};

export default ToggleExample;
