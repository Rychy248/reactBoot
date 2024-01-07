import { useEffect, useState } from 'react';
import { WhiteContainer } from '../Containers';
import { SingleUserRender } from "../02-useEffect/04-fetch-data";

/**
 * Component example secondary
 * @param {*} param0 
 * @returns 
 */
function ComponentExample({ id }) {
  const [condition, setCondition] = useState(true);
  const [componentState, setComponentState] = useState("Loading");

  useEffect(() => {
    setTimeout(() => {
        try {
          throw new Error("Something Bad");
          setComponentState("Loaded"); //Theorical if this gonna ok, but in fact, this never gonna ok
        } catch (error) { setComponentState("Error"); };
      }, 1000);

    return () => {  }; //cleaner
  }, []);
  
  // EARLIER RETURN
  if(componentState === "Loading"){
    return <h2 className='loading-messegue'>Componente example, Loading...</h2>;
  }else if(componentState === "Error"){
    return <h3>Into the componente example, Something went wrong (Intecionality ;) ) ; </h3>;
  };
  //EARLIR RETURN BLOCK FINISHED

  return( <h2>Component example loaded succesfull</h2> );
};

/**
 * Component base
 * @param {*} param0 
 * @returns 
 */
function ComponentCapsule({ children, id }) {
  return(
    <WhiteContainer specialTitle="Part 3, Fetch Data" idTitle={id}>
      <h2>Fetch Data </h2>
      { children }
    </WhiteContainer>
  );    
};

/**
 * 
 * @param { String } id the component id
 * @returns 
 */
function MultipleReturnsFetchData({ id }) {
  const [users, setUsers] = useState([]);
  const [componentState, setComponentState] = useState("Loading");
  const [makeApirequest, setMakeApiRequest] = useState(false);

  useEffect(() => {
    let idTimeOut = null;

    if(makeApirequest){
      fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(data => setUsers([data[0], data[1], data[2]]))
      .catch(err => {
        setComponentState("Error");
        console.log("Some error happend", err);
      });
    } else{
      idTimeOut = setTimeout(() => { setComponentState("Loaded") }, 500);
    };
    
    return ()=> {
      try { clearTimeout(idTimeOut);  } catch (error) { /*some error */ }
    };

  }, [makeApirequest]);
    
  function handlerChange({ target:{ id, value }}){
    switch (id) {
      case "useEffect-part2-4-checkBoxfetch": setMakeApiRequest(prevState => !prevState); break;
      default: break;
    };
  };

  // EARLIER RETURN
  if(componentState === "Loading"){
    return <ComponentCapsule id={id}> <h2 className='loading-messegue'>Loading...</h2> </ComponentCapsule> ;
  }else if(componentState === "Error"){
    return <ComponentCapsule id={id}> <h2>Somethin went wrong</h2> </ComponentCapsule> ;
  };
  //EARLIR RETURN BLOCK FINISHED

  return(
    <ComponentCapsule id={id}>
      <div>
        <input id="useEffect-part2-4-checkBoxfetch" type="checkbox" checked={makeApirequest} onChange={handlerChange} />
        <label>Api request {makeApirequest? "on":"off"}</label>
      </div>


      <div className="users-github-container">
        {users.length === 0 && (
          makeApirequest
          ? <h2>No users</h2>
          : <h2>Api request off</h2>
        )}
        
        {users.map(({ avatar_url, login, type}, index)=> (
          <SingleUserRender
            key={index}
            avatarUrl={avatar_url}
            login={login}
            type={type}
          />
        ))}
      </div>
      
      <ComponentExample />
    </ComponentCapsule>
  );
};

export default MultipleReturnsFetchData;
