// function memo
import { memo } from 'react';

import Item from './Person';

// This is triggered, only when the props has changed
const List = ({ people, deletePerson }) => {

  return (
    <div>
      {people.map((person) => <Item key={person.id} {...person} deletePerson={deletePerson} /> )}
    </div>
  );
};


export default memo(List);
