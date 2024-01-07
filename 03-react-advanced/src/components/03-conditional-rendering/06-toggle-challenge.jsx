import { useState } from "react";
import { WhiteContainer } from "../Containers";

function ToggleChallenge({ id }) {
  const [toogle, setToogle] = useState(false);

  return(
    <WhiteContainer specialTitle="Part 3, Toogle Challenge" idTitle={id}>
      <h2>toggle challenge</h2>
      <button className="btn" onClick={()=>{setToogle(prev => !prev)}}>Toogle Hello</button>

      {toogle && <h3 className="animate-fade"> Hello world :) </h3> }
      
    </WhiteContainer>
  );
};

export default ToggleChallenge;
