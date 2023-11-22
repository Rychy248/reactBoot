

export default function P({ children, className, id, ...otherProperties }) {
    
    return <p className={ className } id={ id } {...otherProperties }>
        { children }
    </p>
}