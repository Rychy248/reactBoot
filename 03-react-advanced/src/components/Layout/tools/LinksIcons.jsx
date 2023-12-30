function SingleLink({ children, linkTitle }) {
  return (
    <li>
      <a href={`#${linkTitle}`} className="">
        {`#${linkTitle}`}
      </a>
      {children}
    </li>
  );
}

function SubLinks({ children, linksList = [] }) {
  const linksAreOverThan0 = linksList.length > 0;
  console.log("LinksList: ", linksList, "List lenth", linksAreOverThan0);

  return (
    linksAreOverThan0 && (
      <ul>
        {linksList.map((link, index) =>
          Array.isArray(link) ? (
            <SingleLink key={index} linkTitle={link[0]}>
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

function PrincipalLink({ links, title }) {
  console.log("links; ", links, " title: ", title);
  return (
    <SingleLink linkTitle={title}>
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
    <lu>
      {keys.map((key, index) => (
        <PrincipalLink key={index} title={key} links={links[key]} />
      ))}
    </lu>
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
