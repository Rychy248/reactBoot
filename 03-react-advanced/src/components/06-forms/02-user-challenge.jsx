import { useState, useEffect, useContext } from "react";
import { WhiteContainer } from "../Containers";
import { Api, Loader } from "../componentsTools";
import { UserChallengeContext  } from "./useContextTools/subAppContext"

function Person({ id, name }) {
  const { deleteUser } = useContext(UserChallengeContext);

  return(
    <li>
      <button className="btn" onClick={()=> deleteUser(id) } > Delete </button>
      {name}
    </li>
  );
};

function ListPersons({ people }) {
  return(
    <div  className="users"> {people.map(({id, name},index)=> <Person key={id} id={id} name={name} /> )} </div>
  );
};


function UserChallenge({ id }) {
  const [componentState, setComponentState ] = useState("Loading");
  const [people, setPeople ] = useState([]);
  const [newPerson, setNewPerson ] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    
    setComponentState("Loading");

    Api("/FetchSinglePeople-part6-forms","Get",1000,signal)
    .then(data => {
      setPeople(data);
      setComponentState("Loaded");
    })
    .catch(err => {
      if(err.name === "AbortError"){
        console.log("Fetch Aborted");
        setComponentState("Loaded");
      }else{
        setComponentState("Error");
      };
    });
    
    return () => { abortController.abort(); };

  }, []);

  function deleteUser(id ) {
    setPeople(prev => prev.filter(person => person.id !== id ) );
  };

  function handlerSubmit(e) {
    e.preventDefault();
    setPeople(prevData => [...prevData, {
      id:( (prevData.length > 0) 
        ? Number(prevData[prevData.length -1].id +1)
        : 1 ),
      name:newPerson
    }]);
    setNewPerson("");
  };

  return (
    <UserChallengeContext.Provider value={{ deleteUser:deleteUser}}>
      <WhiteContainer specialTitle="Part 6 - Controlled input" idTitle={id}>
        
        { (people.length > 0) && <button type='button' className='btn' onClick={()=> setPeople([])} > Clear All </button> }

        <div>
          {componentState === "Loading" && <Loader />}
          {componentState === "Loaded" &&  <ListPersons people={people} />}
          {componentState === "Error" && <h2>Error in fetch data</h2>}
        </div>

        <div>
          <form className='form' onSubmit={handlerSubmit}>
            <h4>Add User</h4>
            <div className='form-row'>
              <label htmlFor='name' className='form-label'>
                name
              </label>
              <input 
                type='text'
                className='form-input'
                id='part6-02-user-challenge-name'
                required={true} value={newPerson} 
                onChange={(e) => setNewPerson(e.target.value) }/>
            </div>

            <button type='submit' className='btn btn-block'>
              submit
            </button>
          </form>
        </div>

      </WhiteContainer>
    </UserChallengeContext.Provider>
  );
};


export default UserChallenge;