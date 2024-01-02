
import CodeExample  from "./01-code-example"
import UseEffectBasics  from "./02-useEffect-basics"
import MultipleEffects  from "./03-multiple-effects"
import FetchData  from "./04-fetch-data"
import CleanupFunction  from "./05-cleanup-function"

/**
 * 
 * @param {[]} ids ids for all titles of componets excercices
 * @returns 
 */
function SubAppPart2({ ids }) {
  return (
    <>
      <CodeExample id={ids[0]} /> {/* black */}
      <UseEffectBasics id={ids[1]} /> {/* white */}
      <MultipleEffects id={ids[2]} /> {/* black */}
      <FetchData id={ids[3]} /> {/* white */}
      <CleanupFunction id={ids[4]} /> {/* black */}
    </>
  )
}

export default SubAppPart2;
