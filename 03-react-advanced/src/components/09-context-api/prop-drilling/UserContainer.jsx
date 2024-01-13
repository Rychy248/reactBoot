
import { userContainerStyle, userDataStyle, userNameStyle } from "../style/generalStyle"

/**
 * User Container function, to render the user component into the navbar
 * @param { string } user user logged
 * @param { func } sessionStateToggle function to management the user session state
 * @returns jsx
 */
function UserContainer({ user, sessionStateToggle }) {
  
  return(
    <div className="" style={userContainerStyle}>
        <h5 style={userDataStyle}>
          {user.session === "logout" || `Welcome`}
          <span style={userNameStyle}>
            {user.name === ""
              ? "Please Login..."
              : `${user.name}`
            }
          </span>
        </h5>

      <button onClick={sessionStateToggle} >
        { user.session === "logout"? "Login" : "Logout" }
      </button>

    </div>
  );
};

export default UserContainer;
