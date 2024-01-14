import Person from './Person';

const List = ({ people, printLine }) => {
  printLine("LIST, re-render");
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} printLine={printLine}/>;
      })}
    </div>
  );
};
export default List;
