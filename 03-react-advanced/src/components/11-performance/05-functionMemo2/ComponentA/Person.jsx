
// context
import { useComponentAContext } from "./useComponentAContext";

// Component
const Person = ({ name, id, printLine }) => {
  // context consumer
  const { dispatchPeople } = useComponentAContext();
  // handlers
  const onClick = () =>{ dispatchPeople({ type:"DELETE", id, name }) };

  printLine("ComponentA > List > Person - Rendered")

  return (
    <div>
      <h4>{name}</h4>
      <button onClick={onClick} >Delete</button>
    </div>
  );
};
export default Person;
