

export default function Span({ children, className, id, ...otherProps}) {
    return <span className={className} id={id} {...otherProps}>
        { children }
    </span>
};