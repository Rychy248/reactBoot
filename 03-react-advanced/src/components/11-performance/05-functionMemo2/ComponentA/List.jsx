import { memo } from 'react';

import Item from './Person';

// This is triggered, only when the props has changed
const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} />;
      })}
    </div>
  );
};
export default memo(List);
