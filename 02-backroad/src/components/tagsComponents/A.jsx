
export default function A({ children, className, id, href }) {
    
    return <a className={ className } id={ id? id : "" } href={ href? href : `#`  } >
        { children }
    </a>
};
