
import LowerState from "./01-lower-state-problem";
import LowerState2 from "./02-lower-state-solution";
import LowerStateChallenge from "./03-lower-state-challenge";

/**
 * 
 * @param {[]} ids ids for all titles of components exercises
 * @returns 
 */
function SubAppPart11({ ids }) {
  const arrayIds = ids[Object.keys(ids)[0]];

  return (
    <>
      <LowerState id={arrayIds[0]} /> {/** BLACK */}
      <LowerState2 id={arrayIds[1]} /> {/** White */}
      <LowerStateChallenge id={arrayIds[2]} /> {/** White */}
    </>
  )
}

export default SubAppPart11;