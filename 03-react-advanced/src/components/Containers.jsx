
import './Containers.css'

function __containerCreator({children, className:enrichClass, specialTitle=false, idTitle, ...otherProps}, contClass) {
  return (
    <div className={`container-root ${contClass} ${enrichClass} `} {...otherProps}>
      {specialTitle &&  <h1 className='special-title' id={idTitle}>{specialTitle}</h1> }
      {children}
    </div>
  );
};

const BlackContainer = props => __containerCreator({...props, className:"container-black"});
const WhiteContainer = props => __containerCreator({...props, className:"container-white"});

export {BlackContainer, WhiteContainer};
