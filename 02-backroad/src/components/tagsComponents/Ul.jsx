
function Ul({children, className, id, ...otherProps}) {

  return <ul className={className} id={id} {...otherProps}>
    { children }
  </ul>
};

function Li({children, className, id, ...otherProps}) {

  return <li className={className} id={id} {...otherProps}>
    { children }
  </li>
};

export default Ul;
export { Li };