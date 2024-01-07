
function SingleCheckBox({ checkLabel, check , setCheck }) {
  return (
    <div>
      <input 
        id={`${checkLabel.replace(" ","-")}-checkbox`}
        name={`${checkLabel.replace(" ","-")}-checkbox`}
        type="checkbox"
        checked={check}
        onChange={ ()=> setCheck(prev => !prev) }
      />
      <label
        htmlFor={`${checkLabel.replace(" ","-")}-checkbox`}
      >{checkLabel}</label>
    </div>
  );
}

export default SingleCheckBox;