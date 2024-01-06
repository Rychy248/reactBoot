// third modules
import { useEffect, useState } from "react";
// local static
import "./css/04-fetchData.css";
import avatar from "/vite.svg"
// local modules
import { WhiteContainer } from "../Containers";
import fetchDataGithub from "./04FetchDataData";

function SingleUserRender({ avatarUrl=avatar, login="Hello", type="User" }) {
  return (
    <div className="users-github-single-user">
      <img className="users-github-avatar" src={avatarUrl} alt={`${login}.png`}></img>

      <div className="users-github-data">
        <h3 className="users-github-name">{login}{" "}({type})</h3>
        <a className="users-github-profile-link" href={`https://github.com/${login}`} target="_blank">See Profile</a>
      </div>
    </div>
  );
};

function FetchData({ id }) {
  const [users, setUsers] = useState([]);
  const [makeApirequest, setMakeApiRequest] = useState(false);

  useEffect(() => {
    if(makeApirequest){
      fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => {
        console.log("Some error happend", err);
      });
    };
  }, [makeApirequest]);
  
  function handlerChange({ target:{ id, value }}){
    switch (id) {
      case "useEffect-part2-4-checkBoxfetch": setMakeApiRequest(prevState => !prevState); break;
      default: break;
    }
  };
  return(
    <WhiteContainer specialTitle="Part 2, useEffect FetchData" idTitle={id}>

      <h2>fetch data example</h2>;
      <h1 className="users-github-title">Users from GITHUB</h1>
      <p>By default the apiRequest of github users is off, because it's limited the api requests</p>
      <p>So becarefull with the off or on</p>
      <div>
        <input id="useEffect-part2-4-checkBoxfetch" type="checkbox" checked={makeApirequest} onChange={handlerChange} />
        <label>Api request {makeApirequest? "on":"off"}</label>
      </div>

      <div className="users-github-container">
        {users.length === 0 &&(
          makeApirequest
          ? <h2>No users</h2>
          : <h2>(Api request off)</h2>
        )}
        
        {users.map((user, index)=> (
          <SingleUserRender
            key={index}
            avatarUrl={user.avatar_url}
            login={user.login}
            type={user.type}
          />
        ))}
      </div>

    </WhiteContainer>
  );
};

export default FetchData;
