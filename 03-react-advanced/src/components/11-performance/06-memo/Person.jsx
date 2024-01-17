
const Person = ({ name, id, deletePerson }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={()=>{ deletePerson(id, name) }} >Delete</button>
    </div>
  );
};


export default Person;
