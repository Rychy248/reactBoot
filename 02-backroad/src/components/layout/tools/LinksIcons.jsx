import I from "../../tagsComponents/I";
import Ul, { Li } from "../../tagsComponents/Ul";
import A from "../../tagsComponents/A";
/**
 * @param {{ulData:{props}, items:[{href:href, className, children:{textInner:""}}] }} options Items to render inside the funtion
 * @param {{ ulData:{ className:""}, items:[{ href:, target:, className:, children:{i:{ className:, } }}... {} ] }} icons 
 * @returns 
 */
function OptionsIcons({ options, icons }) {
    return {
        options: Options(options),
        icons: Icons(icons)
    };
};

/**
 * @param {{ulData:{props}, items:[{href:href, className, children:{textInner:""}}] }} options Items to render inside the funtion
 * @returns 
 */
function Options({ options }) {
    return (
        <Ul { ...options.ulData }>
            {options.items.map((item, index) => (
                <Li key={index} >
                    <A href={item.href} className={item.className} reef={(item.target === "_blank" ? "noreferrer":"")}> {item.children.textInner} </A>
                </Li>
            ))}
        </Ul>
    );
};

/**
 * @param {{ ulData:{ className:""}, items:[{ href:, target:, className:, children:{i:{ className:, } }}... {} ] }} icons 
 * @returns 
 */
function Icons({ icons }) {
    return (
        <Ul { ...icons.ulData}>
            {icons.items.map((item, index)=> <Li key={index}>
                <A className={item.className} href={item.href} target={item.target} reef={(item.target === "_blank" ? "noreferrer":"")} >
                    <I className={ item.children.i.className } />
                </A>
            </Li>)}    
        </Ul>
    );
};

export default OptionsIcons;
export { Options, Icons };