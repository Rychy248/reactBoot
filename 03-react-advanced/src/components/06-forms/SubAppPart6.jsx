import ControlledInputs from "./01-controlled-inputs"
import UserChallenge from "./02-user-challenge"
import MultipleInputs from "./03-multiple-inputs"
import OtherInputs from "./04-other-inputs"
import UncontrolledInputs from "./05-form-data"

/**
 * 
 * @param {[]} ids ids for all titles of components exercises
 * @returns 
 */
function SubAppPart6({ ids }) {
  const arrayIds = ids[Object.keys(ids)[0]];
  return (
    <>
      <ControlledInputs id={arrayIds[0]} /> {/* black */}
      <UserChallenge id={arrayIds[1]} /> {/* white */}
      <MultipleInputs id={arrayIds[2]} /> {/* black */}
      <OtherInputs id={arrayIds[3]} /> {/* white */}
      <UncontrolledInputs id={arrayIds[4]} /> {/* black */}
    </>
  )
}

export default SubAppPart6;