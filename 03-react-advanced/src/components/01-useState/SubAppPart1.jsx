import ErrorExample  from "./01-error-example"
import UseStateBasics from "./02-useState-basics";
import UseStateArray from "./03-useState-array";
import UseStateObject from "./04-useState-object"
import UseStateGotcha from "./05-useState-gotcha"

/**
 * 
 * @param {[]} ids ids for all titles of componets excercices
 * @returns 
 */
function SubAppPart1({ ids }) {
  return (
    <>
      <ErrorExample id={ids[0]} /> {/* white */}
      <UseStateBasics id={ids[1]} /> {/* black */}
      <UseStateArray id={ids[2]} /> {/* white */}
      <UseStateObject id={ids[3]} /> {/* black */}
      <UseStateGotcha id={ids[4]} /> {/* white */}
    </>
  )
}

export default SubAppPart1;
