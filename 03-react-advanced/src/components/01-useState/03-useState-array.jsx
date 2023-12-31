// third import
import { useState, useEffect } from "react";
// data fetch
import { data as dataImported, people } from "../data.js";
// local import
import { WhiteContainer } from "../Containers";

/**
 * 
 * @param { <> } children a jsx pice to render
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

  const clearData = () => setData([]);

  const removeItem = item => setData(prevData =>(
    prevData.filter(value => (
      !( value.id === item.id && value.name === item.name )
    ))
  ));

  const addNametoList = () =>{
    setData(prevData => [...prevData, {
      id:( (prevData.length > 0) ? Number(prevData[prevData.length -1].id +1) : 1 ),
      name:nameAdd
    }]);
    setNameAdd("");
  };

  function handler({ target:{ id, value }, key }) {//key is the key pressed
    const operations = {
      udpateNameAdd(){ setNameAdd(value); },
    };

    if (id=="useStateArray-part1-03-input-name-add") { operations.udpateNameAdd();
    } else { };
  };


  return(
    <WhiteContainer specialTitle={"Part 1, useState array"} id={id}>
      <h2>useState array example</h2>
      <ul>
        { data.map((item, index)=>{
          return <RenderLi key={item.id} removeItem={removeItem} item={item} />
        })}      
      </ul>
      <button onClick={clearData}>Clear all list</button>
      <input id="useStateArray-part1-03-input-name-add" type="text" value={nameAdd} onChange={handler} />
      <button onClick={addNametoList}>Add name</button>
    </WhiteContainer>
    );
};

export default UseStateArray;
