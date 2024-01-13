// style
import { userContainerStyle, userDataStyle, userNameStyle } from "../style/generalStyle"
// context
import { useContextSubApp } from "./context/SubAppContext";

/**
 * User Container function, to render the user component into the navbar
 * @returns jsx
 */
function UserContainer() {
  const { user, sessionStateToggle } = useContextSubApp();

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

      <button
        onClick={sessionStateToggle}
      >
        { user.session === "logout"? "Login" : "Logout" }
      </button>

    </div>
  );
};

export default UserContainer;
