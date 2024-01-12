
import ToggleExample from "./01-toggle"
import FetchData from "./02-fetch-data"
/**
 * 
 * @param {[]} ids ids for all titles of components exercises
 * @returns 
 */
function SubAppPart8({ ids }) {
  const arrayIds = ids[Object.keys(ids)[0]];
  return (
    <>
      <ToggleExample id={arrayIds[0]} /> {/* black */}
      <FetchData id={arrayIds[1]} /> {/* white */}
    </>
  )
}

export default SubAppPart8;