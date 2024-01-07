
import MultipleReturnsBasics  from "./01-multiple-returns-basics"
import MultipleReturnsFetchData from "./02-multiple-returns-fetch-data"
import Example from "./03-hooks-rule"
import ShortCircuitOverview from "./04-short-circuit-overview"
import ShortCircuitExamples from "./05-short-circuit-examples"
import ToggleChallenge from "./06-toggle-challenge"
import UserChallenge from "./07-user-challenge"


/**
 * 
 * @param {[]} ids ids for all titles of componets excercices
 * @returns 
 */
function SubAppPart3({ ids }) {
  const arrayIds = ids[Object.keys(ids)[0]];
  return (
    <>
      <MultipleReturnsBasics id={arrayIds[0]} /> {/* black */}
      <MultipleReturnsFetchData id={arrayIds[1]} /> {/* white */}
      <Example id={arrayIds[2]} /> {/* black */}
      <ShortCircuitOverview id={arrayIds[3]} /> {/* white */}
      <ShortCircuitExamples id={arrayIds[4]} /> {/* black */}
      <ToggleChallenge id={arrayIds[5]} /> {/* white */}
      <UserChallenge id={arrayIds[6]} /> {/* black */}
    </>
  )
}

export default SubAppPart3;
