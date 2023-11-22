export default function Div({ children, className, id, otherProps }) {
    
    return <div className={className} id={id} {...otherProps}>
        { children }
    </div>
};