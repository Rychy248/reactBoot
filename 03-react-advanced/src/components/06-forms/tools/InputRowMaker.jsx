
function InputRowMaker({ id, displayContent, value, onChange, type="text", required=true}) {
  return (
    <div className="form-row">
      <label
        htmlFor={id}
        className="form-label"
      >
      {displayContent}
      </label>

      <input
        type={type}
        id={id}
        className="form-input"
        required={required}
        value={value}
        onChange={onChange}
      />

    </div>
  );
};

export default InputRowMaker;
export { InputRowMaker };
