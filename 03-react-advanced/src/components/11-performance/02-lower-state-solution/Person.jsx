import { useEffect } from 'react';

const Person = ({ name, printLine}) => {
  printLine("PERSON, re-render");
  // useEffect(() => {
  //   console.log('unfortunately does not fix the issue');
  // }, []);
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};
export default Person;
