
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
  const arrayIds = ids[Object.keys(ids)[0]];
  return (
    <>
      <CodeExample id={arrayIds[0]} /> {/* black */}
      <UseEffectBasics id={arrayIds[1]} /> {/* white */}
      <MultipleEffects id={arrayIds[2]} /> {/* black */}
      <FetchData id={arrayIds[3]} /> {/* white */}
      <CleanupFunction id={arrayIds[4]} /> {/* black */}
    </>
  )
}

export default SubAppPart2;
