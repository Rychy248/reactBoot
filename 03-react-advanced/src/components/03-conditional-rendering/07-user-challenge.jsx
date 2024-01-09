import { useState } from "react";

import { BlackContainer } from "../Containers";
import SingleCheckBox from "../tools/SingleCheckBox";

function UserChallenge({ id }) {
  
  const [showInstructions, setShowInstructions] = useState(false);
  const [showInputName, setShowInputName] = useState(true);
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  
  const login = () => { setUser({ name: name }); setShowInputName(false); };
  const logout = () => { setUser(null); setName(""); setShowInputName(true); };

  return (
    <BlackContainer specialTitle="Part 3, User Challenge" idTitle={id}>
      <h3>User Challenge</h3>

      <SingleCheckBox
        checkLabel="Show Instructions"
        check={showInstructions} setCheck={setShowInstructions}
      />

      {showInstructions && <p className="animate-fade">
        - create state value <br />
        ---- user - default value null <br />
        - create two functions<br />
        ---- login - set's user equal to object with name property<br />
        ---- logout - set's user equal to null<br />
        - in jsx use ? to display two different setups<br />
        <br />
        - h4 with "hello there, user name" and logout button<br />
        - h4 with "please login " and login button<br />
      </p>}

      {showInputName &&
        <input
          value={name}
          placeholder="name"
          required={true}
          onChange={
            ({ target: { value, id } }) => setName(value)
          }
        />
      }

      <h3>{user !== null ? "Login" : "Logout"} successful</h3>

      <button onClick={(user === null ? login : logout)} >
        {(user === null) ? "Login" : "Logout"}
      </button>

      {user !== null && <h3><b>Welcome {name}</b></h3>}

    </BlackContainer>
  );
};

export default UserChallenge;
