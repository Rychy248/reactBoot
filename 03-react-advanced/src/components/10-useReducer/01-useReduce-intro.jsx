// third import
import { useState, useEffect } from "react";
// data fetch
import { data as dataImported, people } from "../data.js";
// local import
import { BlackContainer } from "../Containers.jsx";
// local tools
import { idMakerDecoder } from "../tools";
import { useBoolean } from "../customHooks";


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
function UseStateArray({ id }){
  const [data, setData] = useState(dataImported);
  const [nameAdd, setNameAdd] = useState("");
  const [idMaker, idDecoder] = idMakerDecoder("part10-01-useReducer-");
  const [showResetBtn, toggleShowResetBtn] = useBoolean(false);
  
  const clearData = () => {
    setData([]);
    if(!showResetBtn) toggleShowResetBtn();
  };

  const resetTheList = () => {
    setData(dataImported);
    if(showResetBtn) toggleShowResetBtn();
  };

  const removeItem = ({ id, name}) => {
    if(!showResetBtn) toggleShowResetBtn();
    setData(prevData =>(
      prevData.filter(value =>  !( value.id === id && value.name === name ) )
    ));
  };

  const addNameToList = () =>{
    if (nameAdd !== "") {
      setData(prevData => [...prevData, {
        id:( (prevData.length > 0) ? Number(prevData[prevData.length -1].id +1) : 1 ),
        name:nameAdd
      }]);
      setNameAdd("");
      if(!showResetBtn) toggleShowResetBtn();
    };
  };

  function handler({ target:{ id:fullId, value }, key }) {
    const id = idDecoder(fullId);

    if (id=="name") { setNameAdd(value); };
  };


  return(
    <BlackContainer specialTitle={"Part 10 Use Reduce - using useState Array"} id={id}>
      <h2>useState array example</h2>
      {showResetBtn && <button onClick={resetTheList}>Reset the List</button>}
      {data.length > 0 && <button onClick={clearData}>Clear all list</button>}
      
      <button onClick={addNameToList}>Add name</button>
      <input id={idMaker("name")} type="text" value={nameAdd} onChange={handler} />

      <ol>
        { data.map((item, index)=> <RenderLi key={item.id} removeItem={removeItem} item={item} /> )}      
      </ol>

    </BlackContainer>
    );
};

export default UseStateArray;
