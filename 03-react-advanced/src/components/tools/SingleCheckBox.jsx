
function SingleCheckBox({ checkLabel, check , setCheck }) {
  return (
    <div>
      <input type="checkbox" checked={check} onChange={ ()=> setCheck(prev => !prev) } />
      <label>{checkLabel}</label>
    </div>
  );
}

export default SingleCheckBox;