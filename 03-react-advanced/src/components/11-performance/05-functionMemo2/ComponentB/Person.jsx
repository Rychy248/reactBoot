// using memo function
import { memo } from "react";

// context
import { useComponentBContext } from "./useComponentBContext";

// Component
const Person = ({ name, id, printLine }) => {
  // context consumer
  const { dispatchPeople } = useComponentBContext();
  // handlers
  const onClick = () =>{ dispatchPeople({ type:"DELETE", id, name }) };

  printLine("ComponentB > List > Person - Rendered")

  return (
    <div>
      <h4>{name}</h4>
      <button onClick={onClick} >Delete</button>
    </div>
  );
};

export default memo(Person);
