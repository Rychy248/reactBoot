import logo from "../../imgs/logo.svg";
import Btn from "../tagsComponents/Btn";
import I from "../tagsComponents/I";
import Img from "../tagsComponents/Img";
import Div from "../tagsComponents/Div";
import Ul, { Li } from "../tagsComponents/Ul";
import A from "../tagsComponents/A";

export default function Nav({ }) {
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
        <nav className="navbar">
            <Div className="nav-center">
                <Div className="nav-header">
                    <Img src={logo} className="nav-logo" alt="backroads" />
                    <Btn type="button" className={"nav-toggle"} id={"nav-toggle"}>
                        <I className="fas fa-bars"></I>
                    </Btn>
                </Div>
                {/* <!-- left this comment on purpose --> */}
                <Ul { ...navData.options.ulData }>
                    {navData.options.items.map((item, index) => <Li key={index} >
                        <A href={item.href} className={item.className}>
                            {item.children.textInner}
                        </A>
                    </Li>)}
                </Ul>
                <Ul { ...navData.icons.ulData}>
                    {navData.icons.items.map((item, index)=> <Li key={index}>
                        <A className={item.className} href={item.href} target={item.target} >
                            <I className={ item.children.className }></I>
                        </A>
                    </Li>)}    
                </Ul>
            </Div>
        </nav>
    );
};