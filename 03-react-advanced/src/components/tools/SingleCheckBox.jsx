
function SingleCheckBox({ checkLabel, check , setCheck, enrichStyle={} }) {
  return (
    <div style={enrichStyle}>
      <input 
        id={`${checkLabel.replace(/ /g,"-")}-checkbox`}
        name={`${checkLabel.replace(/ /g,"-")}-checkbox`}
        type="checkbox"
        checked={check}
        onChange={ ()=> setCheck(prev => !prev) }
      />
      <label
        htmlFor={`${checkLabel.replace(/ /g,"-")}-checkbox`}
      >{checkLabel.replace(/-/g," ")}</label>
    </div>
  );
}

export default SingleCheckBox;