// third import
import { useReducer } from "react";
// local import
import { WhiteContainer } from "../Containers.jsx";
// local tools
import { idMakerDecoder } from "../tools/index.jsx";
import reducer, { defaultState} from "./useReduce02Basics.js";

/**
 * 
 * @param { func } removeItem a function for remove an item
 * @param { {id:Number, name:""} } item the item to render
 * @returns 
 */
function RenderLi({children, removeItem, item, ...liProps }) {
  return(
    <li {...liProps}> {item.name}
      <button onClick={()=>{ removeItem(item)}} >Remove</button>
    </li>
  );
};

/**
 * 
 * @param { String } id id for this section
 * @returns 
 */
function UseReduceBasics({ id }){
  const [idMaker, idDecoder] = idMakerDecoder("part10-02-useReducer-");

  // ** With the useReducer, we get Back: state and dispatch || it's mean, two things like useState
  // *** state, is the default value sended, and the dispatch is the function to control the state
  const [state, dispatch] = useReducer(reducer, defaultState);

  const clearData = () => { dispatch({ type:"CLEAR_LIST" }); };
  const resetTheList = () => { dispatch({ type:"RESET_LIST"}); };
  const removeItem = item => { dispatch({ type:"REMOVE_PERSON", person:item }); };
  const addNameToList = () =>{ dispatch({ type:"ADD_PERSON"}); };

  function handler({ target:{ id:fullId, value }, key }) {
    const id = idDecoder(fullId);

    if (id=="name") { dispatch({ type:"MODIFY_NEW_PERSON", newPersonUpdate:value }) };
  };


  return(
    <WhiteContainer specialTitle={"Part 10 Use Reduce - Using a useReduce"} id={id}>
      <h2>Using a useReduce</h2>

      {state.people.length > 0 && <button onClick={clearData}>Clear all list</button>}
      
      <button onClick={addNameToList}>Add name</button>
      <input id={idMaker("name")} type="text" value={state.newPerson} onChange={handler} />

      {state.showResetBtn && <button onClick={resetTheList}>Reset the List</button>}
      
      <ol>
        { state.people.map((item, index)=> <RenderLi key={item.id} removeItem={removeItem} item={item} /> )}      
      </ol>

    </WhiteContainer>
    );
};

export default UseReduceBasics;
