

import { useState } from "react";
/**
 * 
 * @param { bool } defaultState
 * @returns [boolean, toggleBoolean]
 */
function useBoolean(defaultState=true) {
  const [boolean, setBoolean] = useState(defaultState);

  function toggleBoolean() {
    setBoolean(prevBool => !prevBool);
  };

  return [boolean, toggleBoolean];
};

export default useBoolean;