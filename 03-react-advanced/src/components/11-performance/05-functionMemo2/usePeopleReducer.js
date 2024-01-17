/**USE REDUCE, BUUUUTT. CUSTOMIZED HOOK */
// react components
import { useReducer } from "react";

// local data
import { data } from "../../data"; // {id: 2, name: 'peter'}


// defaultValue for useReducer
const defaultValue = { people:data };

// Reducer function for useReducer
function reducer(state, action) {
  const { type } = action;

    if(type === "ADD"){
      if (action.name !== ""){
        return {
          ...state,
          people:[
            ...state.people,
            {id:new Date().getTime() , name:action.name }
          ]
        };
      };

    } else if(type === "DELETE"){
      return {
        ...state,
        people:state.people.filter(
          ({id, name}) => (id !== action.id && name !== action.name)
        ),
      };
    };

    console.log(`ERROR, INVALID ACTION "${type}" for peopleReducer`);
    return { ...state };
  
};

//return [people, dispatchPeople]
export const usePeopleReducer = () => useReducer(reducer, defaultValue); ;
