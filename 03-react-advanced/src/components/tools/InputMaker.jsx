
/**
 * Input Row maker
 * @param {*} param0 
 * @returns 
 */
function InputRowMaker({ id, displayContent, value, onChange, type="text", required=true, rowStyle={}}) {
  return (
    <div className="form-row" style={rowStyle}>
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


/**
 * Input Row maker
 * @param {*} param0 
 * @returns 
 */
function InputRowMakerByUseRef({ id, displayContent, useRef, type="text", required=true, rowStyle={}}) {
  return (
    <div className="form-row" style={rowStyle}>
      <label
        htmlFor={id}
        className="form-label"
      >
        {displayContent}
      </label>

      <input
        id={id}
        type={type}
        className="form-input"
        required={required}
        ref={useRef}
      />

    </div>
  );
};

export default InputRowMaker;
export { InputRowMaker, InputRowMakerByUseRef };
