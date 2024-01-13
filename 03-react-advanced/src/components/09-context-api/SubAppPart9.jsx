
import NavbarPropDrilling from "./prop-drilling/Navbar";
import NavbarContextApi from "./context/Navbar";

/**
 * 
 * @param {[]} ids ids for all titles of components exercises
 * @returns 
 */
function SubAppPart9({ ids }) {
  const arrayIds = ids[Object.keys(ids)[0]];

  return (
    <>
      <NavbarPropDrilling id={arrayIds[0]} />
      <NavbarContextApi id={arrayIds[0]} />
    </>
  )
}

export default SubAppPart9;