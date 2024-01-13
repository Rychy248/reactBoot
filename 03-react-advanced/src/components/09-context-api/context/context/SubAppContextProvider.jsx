import { useState } from "react";

// here is an circular importation, who is a bad practice, this is made here just for know the js language
// BUT from here, DON'T DO THIS
import { ContextSubApp } from "./SubAppContext";
// Why is this a circular importation????????????????
// Because in the  "./SubAppContext" is imported the "SubAppContextProvider"

function SubAppContextProvider({ children }) {
  const initialUser = {name:"", session:"logout"};
  const links = [ "Home", "About", "Contact" ];
  const [user, setUser] = useState(initialUser); 

  
  function sessionStateToggle() {
    if(user.session === "logout"){
      setUser({name:"Rychy", session:"login"});
    }else{
      setUser({name:"", session:"logout"});
    };
  };

  return (
    <ContextSubApp.Provider
      value={{
        links,
        user,
        sessionStateToggle
      }}
    >
      {children}
    </ContextSubApp.Provider>
  );
};


export default SubAppContextProvider;