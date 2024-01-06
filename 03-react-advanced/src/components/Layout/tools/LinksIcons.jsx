import { useContext } from "react";
import LinkClickContext from "./LinkClickContext";

function SingleLink({ children, linkTitle, className="nav-link" }) {
  const onClick = useContext(LinkClickContext);
  return (
    <li>
      <a href={`#${linkTitle}`} className={className} onClick={onClick}>
        {`#${linkTitle}`}
      </a>
      {children}
    </li>
  );
}

function SubLinks({ children, linksList = [] }) {
  const linksAreOverThan0 = linksList.length > 0;
  return (
    linksAreOverThan0 && (
      <ul>
        {linksList.map((link, index) =>
          Array.isArray(link) ? (
            <SingleLink key={index} linkTitle={link[0]} >
              <SubLinks linksList={link.slice(1)} />
            </SingleLink>
          ) : (
            <SingleLink key={index} linkTitle={link} />
          )
        )}
      </ul>
    )
  );
}

function PrincipalLink({ links, title, }) {
  return (
    <SingleLink linkTitle={title} className="nav-link-principal" >
      <SubLinks linksList={links} />
    </SingleLink>
  );
}

/**
 * @param { { "fattherList":[ [ "link1",... "linkN" ] ], }; } links Items to render inside the funtion
 * @returns
 */
function NavLinks({ links }) {
  const keys = Object.keys(links);
  return (
    <ul className="nav-links-container">
      {keys.map((key, index) => (
        <PrincipalLink key={index} title={key} links={links[key]} />
      ))}
    </ul>
  );
}

/**
 * @param {{ ulData:{ className:""}, items:[{ href:, target:, className:, children:{i:{ className:, } }}... {} ] }} icons
 * @returns
 */
function Icons({ icons, className }) {
  const classNameUnifed = `${icons.ulData.className} ${className}`;
  return (
    <ul {...icons.ulData} className={classNameUnifed}>
      {icons.items.map(
        ({ className, href, target, children: { i } }, index) => (
          <li key={index}>
            <a
              className={className}
              href={href}
              target={target}
              reef={target === "_blank" ? "noreferrer" : ""}
            >
              <i className={i.className} />
            </a>
          </li>
        )
      )}
    </ul>
  );
}

export { NavLinks, Icons };
