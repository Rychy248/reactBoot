import P from "../tagsComponents/P";
import Span from "../tagsComponents/Span";

import {Options, Icons} from "./tools/LinksIcons";

function Footer({ }) {
    const navData = { // eachItem of the list is an anchor
        options:{
            ulData:{ className:"footer-links" },
            items:[
                {href:"#home", className:"footer-link", children:{ textInner:"home"} },
                {href:"#about", className:"footer-link", children:{ textInner:"about"} },
                {href:"#services", className:"footer-link", children:{ textInner:"services"} },
                {href:"#tours", className:"footer-link", children:{ textInner:"tour"} },
                {href:"#featured", className:"footer-link", children:{textInner:"featured"} }
            ],
        },
        icons:{
            ulData:{ className:"footer-icons" },
            items:[
                {href:"https://www.twitter.com", target:"_blank", className:"footer-icon", children: { i:{ className:"fab fa-facebook"}} },
                {href:"https://www.twitter.com", target:"_blank", className:"footer-icon", children: { i:{ className:"fab fa-twitter"}} },
                {href:"https://www.twitter.com", target:"_blank", className:"footer-icon", children: { i:{ className:"fab fa-squarespace"}} }
            ]
        }
    };

    return <footer className="section footer">
        <Options options={navData.options} />
        <Icons icons={navData.icons} />
        <P className="copyright">
            copyright &copy; Backroads travel tours company <Span id="date"></Span> all rights reserved
        </P>
    </footer>
};

export default Footer;