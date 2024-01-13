// styles
import { navStyle, navContainerStyle, navTitleStyle } from "../style/generalStyle"
// context
import SubAppContext from "./context/SubAppContext";
// local importation
import NavLink from "./NavLink";
import { WhiteContainer } from "../../Containers";

/**
 * This structure is used to show how complicated become management the data trough the props drilling
 * @returns jsx
 */
function NavbarContextApi({ id }) {

  return(
    <WhiteContainer idTitle={ id } specialTitle="Part 9 - Navbar with Context API">
      <SubAppContext>
        <div className="" style={navStyle}>
          <div className="" style={navContainerStyle}>
            <h2 style={navTitleStyle}>Context Api</h2>
              <NavLink />
          </div>
        </div>
      </SubAppContext>
    </WhiteContainer>
  );
};

export default NavbarContextApi;

