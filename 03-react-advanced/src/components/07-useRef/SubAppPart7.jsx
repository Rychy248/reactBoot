import UseRefBasics from "./01-useRef-basics";

/**
 * 
 * @param {[]} ids ids for all titles of components exercises
 * @returns 
 */
function SubAppPart7({ ids }) {
  const arrayIds = ids[Object.keys(ids)[0]];
  return (
    <>
      <UseRefBasics id={arrayIds[0]} /> {/* black */}
    </>
  )
}

export default SubAppPart7;