
export default function Article({ children, className, id }) {
    
    return <article className={className} id={id? id : ""} >
        {children}
    </article>
}