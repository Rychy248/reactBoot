// third modules
import { useState } from "react";

// local components tools
// ** I cant get the ComponentAContext, Here and after use the userComponentAContext, because, it's triggered a problem
import { useComponentAContext } from "./useComponentAContext";
import { idMakerDecoder, InputRowMaker, SingleCheckBox } from "../../../tools";
import List from "./List";

/**
 * This component don't use memo function, so is not optimized for each render
 * @returns 
 */
function ComponentA() {
  // Context consumer
  const { people, dispatchPeople, printConsoleLogs, setPrintConsoleLogs, printLine } = useComponentAContext();
  // local state
  const [newPeople, setNewPeople] = useState("");  
  const [idMaker, idDecoder ] = idMakerDecoder("part11-lowerState-useMemo2-ca-");
  
  // handlers
  const handleChange = ({ target:{ id, value }}) => setNewPeople(value); ;
  const handlerSubmit = () =>{
    dispatchPeople({ type:"ADD", name:newPeople }); 
    setNewPeople("");
  };

  printLine("Component A Rendered");

  return(
    <>
      <SingleCheckBox checkLabel="ComponentA logs active" check={printConsoleLogs} setCheck={setPrintConsoleLogs} />
      <InputRowMaker 
        id={idMaker("name")}
        displayContent="Name"
        value={newPeople}
        onChange={handleChange}
      />      
      <button onClick={handlerSubmit}>Add Person</button>
      <List people={people}/> {/**Here is passing "people" as prop, just as practice, because it's the if it's reached by context */}
    </>
  );
};

export default ComponentA;