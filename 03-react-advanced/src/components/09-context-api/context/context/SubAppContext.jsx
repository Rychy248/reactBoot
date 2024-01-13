
import { createContext, useContext } from "react";

// here is an circular importation
// This was made just for practice, but in fact, this is a bad practice, jajaja, Don't DO CIRCULAR IMPORTATIONS 
import SubAppContextProvider from "./SubAppContextProvider";
// Why is this a circular importation????????????????
// Because into the ./SubAppContextProvider, is imported the "ContextSubApp"

export const ContextSubApp = createContext("");

function SubAppContext({ children }) {
  return (
    <SubAppContextProvider >
      {children}
    </SubAppContextProvider>
  );
};

// Custom hook, to use the context data for this subApp
export const useContextSubApp = () => useContext(ContextSubApp);

export default SubAppContext;
