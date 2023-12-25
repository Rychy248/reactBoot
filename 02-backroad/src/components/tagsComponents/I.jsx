

export default function I({children, className, id, ...otherProps}) {
    return <i className={ className } id={ id ? id : "" } { ...otherProps } >
        { children }
    </i>
};