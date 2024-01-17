
import LowerState from "./01-lower-state-problem";
import LowerState2 from "./02-lower-state-solution";
import LowerStateChallenge from "./03-lower-state-challenge";
import LowerStateHooks from "./04-hooks";
import LowerStateFunctionMemo from "./05-functionMemo2";
import Memoization from "./06-memo";
import LatestReact from "./07-react-18";

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
      <LowerStateChallenge id={arrayIds[2]} /> {/** Black */}
      <LowerStateHooks id={arrayIds[3]} /> {/** White */}
      <LowerStateFunctionMemo id={arrayIds[4]} /> {/** BLACK */}
      <Memoization id={arrayIds[5]} /> {/** White */}
      <LatestReact id={arrayIds[6]} /> {/** Black */}
    </>
  )
}

export default SubAppPart11;