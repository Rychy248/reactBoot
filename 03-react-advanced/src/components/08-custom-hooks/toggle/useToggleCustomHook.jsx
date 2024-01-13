
import { useState } from "react";
/**
 * This is custom Hook, enriched by HOC, High-Order-Components
 * It's a design way to program in functional programming
 * @param {*} defaultValue 
 * @returns 
 */
function useToggleCustomHook(defaultValue=false) {
  const [show, setShow] = useState(defaultValue);

  /**This simple hook, manage the setState, with toggle */
  const toggle = () => setShow(!show) ;

  return[show, toggle];
};


export default useToggleCustomHook;