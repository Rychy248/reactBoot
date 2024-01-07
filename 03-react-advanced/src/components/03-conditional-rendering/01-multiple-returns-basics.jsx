import { useEffect, useState } from 'react';
import { BlackContainer } from '../Containers';

function MultipleReturnsBasics ({ id }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      //some fetch finished
      setLoading(false);
    }, 4000);

    return () => { clearTimeout(idTimeOut); };
  }, []);
  
  //A EARLIER RETURN
  if(loading){
    return(
      <BlackContainer specialTitle="Part 3, Multiple Returns basics" idTitle={id}>
        <h2 className='loading-messegue'>Loading...</h2>
      </BlackContainer>
    );
  };

  return(
    <BlackContainer specialTitle="Part 3, Multiple Returns basics" idTitle={id}>
      <h2>Multiple Returns Example completed</h2>
    </BlackContainer>
  );

};

export default MultipleReturnsBasics;
