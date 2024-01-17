
// context
import { useComponentAContext } from "./useComponentAContext";
// component
import Item from './Person';

// This is triggered, only when the props has changed or the related context
function List({ people:{people} }) {
  // the people props is passed trough props drilling just for fun
  // that var, could be getted by the context
  const { printLine} = useComponentAContext();
  printLine("ComponentA > List, Rendered");

  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} printLine={printLine} />;
      })}
    </div>
  );
};
export default List;
