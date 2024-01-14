
import UseStateArray from "./01-useReduce-intro";
import UseReduceBasics from "./02-useReduce-Basics";

/**
 * 
 * @param {[]} ids ids for all titles of components exercises
 * @returns 
 */
function SubAppPart10({ ids }) {
  const arrayIds = ids[Object.keys(ids)[0]];

  return (
    <>
    <UseStateArray id={arrayIds[0]} />
    <UseReduceBasics id={arrayIds[1]} />
    </>
  )
}

export default SubAppPart10;