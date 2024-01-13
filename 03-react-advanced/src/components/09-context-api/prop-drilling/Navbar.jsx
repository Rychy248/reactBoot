// third importation
import { useState, useEffect } from "react";
// styles
import { navStyle, navContainerStyle, navTitleStyle } from "../style/generalStyle"
// local importation
import { BlackContainer } from "../../Containers";
import NavLink from "./NavLink";
/**
 * This structure is used to show how complicated become management the data trough the props drilling
 */

function NavbarPropDrilling({ id }) {
  const initialUser = {name:"", session:"logout"};
  const links = [ "Home", "About", "Contact" ];
  const [user, setUser] = useState(initialUser); 

  function sessionStateToggle() {
    if(user.session === "logout"){
      setUser({name:"Rychy", session:"login"});
    }else{
      setUser({name:"", session:"logout"});
    };
  };

  return(
    <BlackContainer idTitle={ id } specialTitle="Part 9 - Navbar with prop drilling">
      <div className="" style={navStyle}>
        <div className="" style={navContainerStyle}>
          <h2 style={navTitleStyle}>Context Api</h2>
            <NavLink user={user} links={links} sessionStateToggle={sessionStateToggle} />
        </div>
      </div>
    </BlackContainer>
  );
};

export default NavbarPropDrilling;

