
function SingleCheckBox({ checkLabel, check , setCheck, toggleCheck, enrichStyle={} }) {

  const onChange = ()=> setCheck(prev => !prev);;

  return (
    <div style={enrichStyle}>
      <input 
        id={`${checkLabel.replace(/ /g,"-")}-checkbox`}
        name={`${checkLabel.replace(/ /g,"-")}-checkbox`}
        type="checkbox"
        checked={check}
        onChange={ toggleCheck || onChange}
      />
      <label
        htmlFor={`${checkLabel.replace(/ /g,"-")}-checkbox`}
      >{checkLabel.replace(/-/g," ")}</label>
    </div>
  );
}

export default SingleCheckBox;