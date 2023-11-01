export default function Input({ type, placeholder, state, setState, className, otherProperties }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`form-control ${className}`}
            value={state}
            onChange={setState ? (e) => setState(e.target.value) : undefined}
            {...otherProperties}
        />
    );
};