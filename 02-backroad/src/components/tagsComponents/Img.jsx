
export default function Img({ children, className, id, src, alt, ...otherProps }) {
    return <img className={className} id={src} src={src} alt={alt}>
        {children}
    </img>
};