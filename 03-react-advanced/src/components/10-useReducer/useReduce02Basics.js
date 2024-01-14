// data fetch
import { data as dataImported } from "../data.js";

const defaultState = { // initial state for the hook useReduce
  people:dataImported,
  newPerson:"",
  showResetBtn:false,
}; 

// * useReduce, essentially update a state, like useState, but, this is not directly like useState, this
// * use functions to update the initial state, inside the reducer,
// * FIRST we call the dispatch and he get arguments through him parameters
// * SECOND after the dispatch call, the dispatcher call the reducer, 
// * THIRD, behind scene, we can told to the reducer what actions needs to take based on the dispatch parameters
// * FOURTH, behind scene, the reducer know what to do based on the arguments TO TAKE UPDATE the state

// * useReduce needs two things: defaultState, and a reduce function, a function to manipulate the state */
// ** With the reducer we control essentially our entire state THE REDUCE FUNCTION NEED TO BE A PURE FUNCTION
const reducer = (state, action) => { // reducer function, He have to return the new state
  
  // action by convention contain the action into type prop, and more data if it's necessary
  const { type, person, newPersonUpdate } = action;

  switch (type) {
    case "MODIFY_NEW_PERSON":
      return { ...state, newPerson:newPersonUpdate };
    break;
    case "CLEAR_LIST":
      return { ...state, showResetBtn:true,  people:[] };
    break;
    case "RESET_LIST":
      return { ...state, showResetBtn:false, people:dataImported };
    break;
    case "REMOVE_PERSON":
      const {id, name} = person;
      return { ...state, showResetBtn:true,
        people:state.people.filter(item => ( !( item.id === id && item.name === name ) ))
      };
      break;
    case "ADD_PERSON":        
      if (state.newPerson !== "") {
        return {
          newPerson:"",
          showResetBtn:true,
          people: [
            ...state.people,
            {
              id:( (state.people.length > 0) ? Number(state.people[state.people.length -1].id +1) : 1 ),
              name:state.newPerson
            }
          ]
        }
      }else{
        return state;
      };
      break;
      
    default:
      // Here become a throw Error
      return state;
      break;
  }

};


export {reducer, defaultState};
export default reducer;