
// third modules
import { createContext, useContext, useState } from "react";
// custom hooks
import { usePeopleReducer } from "../usePeopleReducer";

// context creation
const Context = createContext({ people:{people:[]}, dispatchPeople:()=>{}, });

// ComponentBContextProvider is responsible for providing the context to its children.
function ComponentBProvider({ children }) {
  const [people, dispatchPeople] = usePeopleReducer();
  const [printConsoleLogs, setPrintConsoleLogs] = useState(false);

  const printLine = (props) =>{ if(printConsoleLogs) console.log(`${props}`); };

  return (
    <Context.Provider
      value={{
        people,
        dispatchPeople,
        printConsoleLogs,
        setPrintConsoleLogs,
        printLine
      }}
    >
      {children}
    </Context.Provider>
  );
};

// ComponentB is a wrapper component that ensures its children have access to ComponentBContext.
function ComponentBContext({ children }) {
  return (
    <ComponentBProvider>
      {children}
    </ComponentBProvider>
  );
};
// custom context hook
export const useComponentBContext = () => useContext(Context);

// componentProvider
export default ComponentBContext;
