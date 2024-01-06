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
  const arrayIds = ids[Object.keys(ids)[0]];
  return (
    <>
      <ErrorExample id={arrayIds[0]} /> {/* black */}
      <UseStateBasics id={arrayIds[1]} /> {/* white */}
      <UseStateArray id={arrayIds[2]} /> {/*black */}
      <UseStateObject id={arrayIds[3]} /> {/* white */}
      <UseStateGotcha id={arrayIds[4]} /> {/*black */}
    </>
  )
}

export default SubAppPart1;
