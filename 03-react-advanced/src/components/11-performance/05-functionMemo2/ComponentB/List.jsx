// using memo function
import { memo } from "react";

// context
import { useComponentBContext } from "./useComponentBContext";
// component
import Item from './Person';

// This is triggered, only when the props has changed or the related context
function List({ people:{people} }) {
  // the people props is passed trough props drilling just for fun
  // that var, could be getted by the context
  const { printLine} = useComponentBContext();
  printLine("ComponentB > List, Rendered");

  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} printLine={printLine} />;
      })}
    </div>
  );
};


// React Memo doesn't work because it only performs a shallow comparison of the component's properties.
// Every time the app is updated, the user variable is re-declared, which happens when you use objects.
// To fix this, use the second argument and provide a custom comparison function.
function comparisonFunction(prevProps, nextProps) {
  if (prevProps.people === nextProps.people){
    return true; // props are equal
  };
  return false; // props are not equal -> update the component
};
// MEMO FUNCTION USE
export default memo(List, comparisonFunction);
