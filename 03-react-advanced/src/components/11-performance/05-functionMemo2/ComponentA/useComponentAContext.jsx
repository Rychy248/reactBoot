
// third modules
import { createContext, useContext, useState } from "react";
// custom hooks
import { usePeopleReducer } from "../usePeopleReducer";

// context creation
const Context = createContext({ people:{people:[]}, dispatchPeople:()=>{}, });

// ComponentAContextProvider is responsible for providing the context to its children.
function ComponentAProvider({ children }) {
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

// ComponentA is a wrapper component that ensures its children have access to ComponentAContext.
function ComponentAContext({ children }) {
  return (
    <ComponentAProvider>
      {children}
    </ComponentAProvider>
  );
};
// custom context hook
export const useComponentAContext = () => useContext(Context);

// componentProvider
export default ComponentAContext;
