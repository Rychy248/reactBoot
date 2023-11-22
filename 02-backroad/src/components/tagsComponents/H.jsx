

export default function H({ level, children, className, id, ...otherProperties}) {
    return (
        level === 1?
            <h1 className={className} id={id} {...otherProperties}>{ children }</h1>
        : level === 2?
            <h2 className={className} id={id} {...otherProperties}>{ children }</h2>
        : level === 3?
            <h3 className={className} id={id} {...otherProperties}>{ children }</h3>
        : level === 4?
            <h4 className={className} id={id} {...otherProperties}>{ children }</h4>
        : level === 5?
            <h5 className={className} id={id} {...otherProperties}>{ children }</h5>
        :
            <h6 className={className} id={id} {...otherProperties}>{ children }</h6>
    );
};