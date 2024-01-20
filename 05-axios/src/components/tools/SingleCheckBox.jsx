
import { useId } from "react";

function SingleCheckBox({ label, check , setCheck, toggleCheck }) {
  const id = useId();
  const change = () => { setCheck(!check) };
  return(
    <div>
      <input 
        id={id}
        name={id}
        type="checkbox"
        checked={check}
        onChange={ toggleCheck || change}
      />
      <label
        htmlFor={id}
      >{label}</label>
    </div>
  );
};

export default SingleCheckBox;