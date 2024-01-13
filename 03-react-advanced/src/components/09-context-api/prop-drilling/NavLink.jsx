// local importation
import UserContainer from "./UserContainer";
import { navLinksStyle, navLinkStyle } from "../style/generalStyle"

/**
 * Nav links render component
 * @param { string } user user logged
 * @param { Array } links an array of links to render in the navbar
 * @param { func } sessionStateToggle function to management the user session state
 * @returns jsx
 */
function NavLink({ user, links, sessionStateToggle }) {

  return(<>

    <ul className="" style={navLinksStyle}>
      {links.map((link, index)=> <li key={index} style={navLinkStyle}>{link}</li> )}
    </ul>

    <UserContainer user={user} sessionStateToggle={sessionStateToggle} />

  </>);
};

export default NavLink;
