// third modules
import { useState } from 'react';
// local modules
import { WhiteContainer } from '../Containers';

function UseStateObject({ id }) {
  const Person = { name:"", age:0, hobby:"" };
  let [person, setPerson] = useState({...Person});
  let [secondPerson, setSecondPerson] = useState({...Person});

  function changeHandler({ target:{ id, value} }) {
    setSecondPerson(prevPerson => ({ ...prevPerson, [id.match(/-(\w+)$/)[1]]:value } ));
  };

  function changePeople() {
    const temPerson = {...person}; // the correct way is using a temporary var to save the personData
    setPerson(secondPerson);
    setSecondPerson(temPerson);
  };

  return(
    <WhiteContainer specialTitle={"Part 1, UseState object"} id={id}>
      <h2>useState object example</h2>
      <h3>Person{person.name.length > 0 && ` "${person.name}"`}</h3>
      <p>{person.name} Details:</p>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Hobby: {person.hobby}</p>
      
      <input id='useState04-object-name' type='text' value={secondPerson.name} onChange={changeHandler}></input>
      <input id='useState04-object-age' type='number' value={secondPerson.age} onChange={changeHandler}></input>
      <input id='useState04-object-hobby' type='text' value={secondPerson.hobby} onChange={changeHandler}></input>
      <button onClick={changePeople}>Change person</button>
    </WhiteContainer>
  );
};

export default UseStateObject;
