import logo from "../../imgs/logo.svg";
import Btn from "../tagsComponents/Btn";
import I from "../tagsComponents/I";
import Img from "../tagsComponents/Img";
import Div from "../tagsComponents/Div";
import Nav from "../tagsComponents/Nav";

import { Options, Icons } from "./tools/LinksIcons"

export default function Navbar({ }) {
    const navData = { // eachItem of the list is an anchor
        options:{
            ulData:{ className:"nav-links", id:"nav-links" },
            items:[
                {href:"#home", className:"nav-link", children:{ textInner:"home"} },
                {href:"#about", className:"nav-link", children:{ textInner:"about"} },
                {href:"#services", className:"nav-link", children:{ textInner:"services"} },
                {href:"#tours", className:"nav-link", children:{ textInner:"tour"} }
            ],
        },
        icons:{
            ulData:{ className:"nav-icons" },
            items:[
                {href:"https://www.twitter.com", target:"_blank", className:"nav-icon", children: { i:{ className:"fab fa-facebook"}} },
                {href:"https://www.twitter.com", target:"_blank", className:"nav-icon", children: { i:{ className:"fab fa-twitter"}} },
                {href:"https://www.twitter.com", target:"_blank", className:"nav-icon", children: { i:{ className:"fab fa-squarespace"}} }
            ]
        }
    };

    return (
        <Nav className="navbar">
            <Div className="nav-center">
                <Div className="nav-header">
                    <Img src={logo} className="nav-logo" alt="backroads" />
                    <Btn type="button" className={"nav-toggle"} id={"nav-toggle"}>
                        <I className="fas fa-bars"></I>
                    </Btn>
                </Div>
                {/* <!-- left this comment on purpose --> */}
                <Options options={navData.options} />
                <Icons icons={navData.icons} />
            </Div>
        </Nav>
    );
};