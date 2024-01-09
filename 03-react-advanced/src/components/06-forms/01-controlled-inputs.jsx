import { useState } from "react";
import { BlackContainer } from "../Containers";
import InputRowMaker from "./tools/InputRowMaker";

/**
 * 
 * @param { string } id Id for this component
 * @returns 
 */
function ControlledInputs({ id }) { 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // IDS PREFIX FOR THIS COMPONENT=  part6-1-controlled-input
  const idMaker = (id) => `part6-1-controlled-input-${id}`; ;

  function handlerChange({ target:{id, value}, key, ...props }) {

    switch (id) {
      case `${idMaker("name")}`: setName(value); break;
      case `${idMaker("email")}`: setEmail(value); break;
    
      default:
        break;
    }
  };

  return(
    <BlackContainer specialTitle="Part 6 - Controlled Inputs" idTitle={id}>
      <form className="form">
        <h4>Controller inputs </h4>

        <InputRowMaker id={idMaker("name" )} displayContent="Name" type="text" required={true} value={name} onChange={handlerChange}/>
        <InputRowMaker id={idMaker("email")} displayContent="Email" type="email" required={true} value={email} onChange={handlerChange}/>

        <button type="submit" className="btn btn-block">
          submit
        </button>

      </form>
    </BlackContainer>
  );
};

export default ControlledInputs;