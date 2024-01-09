// react imports
import { useEffect, useState, useRef } from "react";
// third Modules
import {Loader} from "../componentsTools";

// localmodules
import { Icons, NavLinks } from "./tools/LinksIcons"
import LinkClickContext from "./tools/LinkClickContext";
// static
import "./Nav.css"
import logo from "./../../assets/react.svg"

export default function Navbar({ links }) {
  const [componentState, SetComponentState] = useState(true);
  const checkBoxRef = useRef(null);
  
  function onLinkClick(e) { checkBoxRef.current.checked = false; };

  return (
    <LinkClickContext.Provider value={onLinkClick}>
      <nav>
        <div className="navbar">
          <div className="nav-container">
            <input className="checkbox" type="checkbox" ref={checkBoxRef} name="" id="" />
                <div className="hamburger-lines">
                  <span className="line line1"></span>
                  <span className="line line2"></span>
                  <span className="line line3"></span>
                </div>  
              <div className="logo">
                  <h1>React third module</h1>
                  <div>
                    <img className="nav-logo" src="vite.svg" />
                    <img className="nav-logo react" src={logo} />
                  </div>
              </div>

            <div className="menu-items">
              <input className="checkbox" type="checkbox"></input>
                {(componentState !== "Loading") &&
                  <>
                    <NavLinks className="animate-fade" links={links}/>
                    {/* <Icons className="animate-fade" icons={navData.icons} /> */}
                  </>
                }
              <Loader className={`nav-loader ${componentState !== "Loading" && "fadeOut"}`} />
            </div>
          </div>
        </div>
      </nav>
    </LinkClickContext.Provider>
  );
};
