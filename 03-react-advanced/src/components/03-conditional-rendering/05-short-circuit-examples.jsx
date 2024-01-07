import { useState } from 'react';
import { BlackContainer } from '../Containers';

function ShortCircuitExamples({ id }) {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  function editing(edit=true) { setIsEditing(edit); };

  return(
    <BlackContainer specialTitle="Part 3, Short Circuit examples" idTitle={id}>
      <h2>short circuit - examples</h2>

      <div>
        <h3>{text || "Default text, || operator"}</h3>
        <h3>Name: {name || "No name"}</h3>
        {user && <h3>User: {user.name}</h3>}
      </div>
      
      
      { isEditing || <h3>...Nothing in this component is editing</h3>}
      { isEditing && <h3>...Something in this component is editing</h3>}

    </BlackContainer>
  );
};

export default ShortCircuitExamples;
