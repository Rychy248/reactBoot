// styles
import { navLinksStyle, navLinkStyle } from "../style/generalStyle"
// context
import { useContextSubApp } from "./context/SubAppContext";
// local importation
import UserContainer from "./UserContainer";

/**
 * Nav links render component
 * @returns jsx
 */
function NavLink() {
  const { links } = useContextSubApp();
  
  return(<>

    <ul className="" style={navLinksStyle}>
      {links.map((link, index)=> <li key={index} style={navLinkStyle}>{link}</li> )}
    </ul>

    <UserContainer />

  </>);
};

export default NavLink;
