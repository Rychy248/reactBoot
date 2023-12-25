// react imports
import { useEffect, useState } from "react";
// third Modules
import {Api, Loader} from "../componentsTools";
// local imports
//-- static
import logo from "../../imgs/logo.svg";
//--componets
/** --- replaced by two other ways to import
import Btn from "../tagsComponents/Btn";
import I from "../tagsComponents/I";
import Img from "../tagsComponents/Img";
import Div from "../tagsComponents/Div";
import Nav from "../tagsComponents/Nav";
 */
import { Btn, I, Img } from "../tagsComponents/index";
import { Div, Nav } from "../tagsComponents";
import { Icons, Options } from "./tools/LinksIcons"

export default function Navbar() {
    const [navData, setNavData] = useState();
    const [componentState, setComponentState] = useState("Loading");
    
    useEffect(() => {
        Api("/FetchNavData", "Get")
        .then(data => {
            setNavData(data);
            setComponentState("Loaded");
        })
        .catch(err =>{ throw err; })
    }, []);

    return (
        <Nav className="navbar">
            <Div className="nav-center">
                <Div className="nav-header">
                    <Img src={logo} className="nav-logo" alt="backroads" />
                    <Btn type="button" className={"nav-toggle"} id={"nav-toggle"}>
                        <I className="fas fa-bars"></I>
                    </Btn>
                </Div>
                {(componentState !== "Loading") &&
                    <>
                        <Options className="animate-fade" options={navData.options} />
                        <Icons className="animate-fade" icons={navData.icons} />
                    </>
                }
                <Loader className={`nav-loader ${componentState !== "Loading" && "fadeOut"}`} />
            </Div>
        </Nav>
    );
};