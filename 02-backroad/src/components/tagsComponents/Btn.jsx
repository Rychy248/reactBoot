
export default function Btn({ children, className, id, src, alt, type, ...otherProps }) {
  return <button
      className={className}
      id={id}
      src={src}
      alt={alt}
      type={type}
      {...otherProps}
    >
    {children}
  </button>
};