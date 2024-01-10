// third modules
import { useState, useContext } from "react";
// local tools
import InputRowMaker from "./tools/InputRowMaker"
// local components
import { BlackContainer } from "../Containers";
import { idMakerDecoder } from "../tools";

function MultipleInputs({ id }) {
  const userBase = { name:"", email:"", password:"" };
  
  const [user, setUser] = useState({...userBase});
  const [userLogged, setUserLogged] = useState({...userBase});

  const [idMaker, idDecoder] = idMakerDecoder("part6-3-multiple-input-");

  const logout = () => setUserLogged({ ...userBase }); ;

  function handlerChange({ target:{id:fullId, value} }) {
    const id = idDecoder(fullId);
    setUser(prev => ({...prev, [id]:value}));
  };

  function handlerSubmit(e) {
    e.preventDefault();
    setUserLogged({...user});
    setUser({...userBase});
  };

  
  return (
    <BlackContainer specialTitle={"Part 6 - Multiple Inputs"} idTitle={id}>
      <div>
        <form className='form' onSubmit={handlerSubmit}>
          <h4>Multiple Inputs</h4>
          {/* name */}
          <InputRowMaker
            id={idMaker("name")}
            displayContent="Name"
            type="text"
            value={user.name}
            onChange={handlerChange}
          />
          {/* email */}
          <InputRowMaker
            id={idMaker("email")}
            displayContent="Email"
            type="email"
            value={user.email}
            onChange={handlerChange}
          />
          {/* password */}
          <InputRowMaker
            id={idMaker("password")}
            displayContent="Password"
            type="password"
            value={user.password}
            onChange={handlerChange}
          />

          <button type='submit' className='btn btn-block'>
            submit
          </button>
        </form>
      </div>
      
      {userLogged.name.length > 0 && (
        <div>
          <br />
          <h3>User : {userLogged.name}</h3>
          <h4>Email : {userLogged.email}</h4>
          <h5>Password: {Array(userLogged.password.length).fill("*").join("")}</h5>
          <button className="btn btn-block" onClick={logout} type="button">Logout</button>
        </div>
      )}
    </BlackContainer>
  );
};
export default MultipleInputs;
