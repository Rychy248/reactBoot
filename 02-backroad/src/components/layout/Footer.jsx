// react imports
import { useState, useEffect } from "react";
// third imports
import { Api, Loader } from "../componentsTools";
// local imports
import { P, Span } from "../tagsComponents/index"
import { Options, Icons } from "./tools/LinksIcons";

function Footer({ }) {
    const [navData, setNavData ]= useState();
    const [componentState, setComponentState] = useState("Loading")

    useEffect(() => {
        Api("/FetchFooterData", "Get", {},{},2000)
        .then(data => {
            setNavData(data);
            setComponentState("Loaded");

        })
        .catch(err => { throw err;  })
        ;
    }, []);

    return <footer className="section footer">
        <Loader 
            width="100px"
            height="100px"
            className={`footer-loader ${componentState !== "Loading" && "fadeOut"}`}
        />
        {(componentState !== "Loading") &&
            <>
                <Options className="animate-fade" options={navData.options} />
                <Icons className="animate-fade" icons={navData.icons} />
            </>
        }
        <P className="copyright">
            copyright &copy; Backroads travel tours company <Span id="date"></Span> all rights reserved 
        </P>
    </footer>
};

export default Footer;