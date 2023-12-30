// react imports
import { useEffect, useState } from "react";
// third Modules
import {Loader} from "../componentsTools";

// localmodules
import { Icons, NavLinks } from "./tools/LinksIcons"

// static
// import "./Nav.css"
import logo from "./../../assets/react.svg"
export default function Navbar({ links }) {
  const [componentState, SetComponentState] = useState(true);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo logo react" alt="backroads" />
          <button type="button" className={"nav-toggle"} id={"nav-toggle"}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {(componentState !== "Loading") &&
          <>
            <NavLinks className="animate-fade" links={links} />
            {/* <Icons className="animate-fade" icons={navData.icons} /> */}
          </>
        }
        <Loader className={`nav-loader ${componentState !== "Loading" && "fadeOut"}`} />
      </div>
    </nav>
  );
};