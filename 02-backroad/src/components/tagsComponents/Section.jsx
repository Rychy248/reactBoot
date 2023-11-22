
export default function Section({ children, className, id }) {
    
    return <section className={className} id={id}>
        {children}
    </section>
};