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
function Options({ options, className}) {
    const classNameUnifed = `${options.ulData.className} ${className}`;
    return (
        <Ul { ...options.ulData } className={classNameUnifed} >
            {options.items.map(({href, className, target, children:{textInner} }, index) => (
                <Li key={index} >
                    <A
                        href={href}
                        className={className}
                        reef={(target === "_blank" ? "noreferrer":"")}
                    >
                        {textInner}
                    </A>
                </Li>
            ))}
        </Ul>
    );
};

/**
 * @param {{ ulData:{ className:""}, items:[{ href:, target:, className:, children:{i:{ className:, } }}... {} ] }} icons 
 * @returns 
 */
function Icons({ icons, className }) {
    const classNameUnifed = `${icons.ulData.className} ${className}`;
    return (
        <Ul { ...icons.ulData} className={classNameUnifed}>
            {icons.items.map(( {className, href, target, children:{i}}, index )=> (
                <Li key={index}>
                    <A
                        className={className}
                        href={href}
                        target={target}
                        reef={(target === "_blank" ? "noreferrer":"")}
                    >
                        <I className={i.className } />
                    </A>
                </Li>
            ))}    
        </Ul>
    );
};

export default OptionsIcons;
export { Options, Icons };