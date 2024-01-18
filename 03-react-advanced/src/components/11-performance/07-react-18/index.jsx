import { useState, useTransition, Suspense, lazy } from 'react';

//Lazy imports
const SlowComponent = lazy(()=> import("./SlowComponent"));

import { BlackContainer } from '../../Containers';

const LatestReact = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [showSlowComponent, setShowSlowComponent] = useState(false);
  
  const handleChange = (e) => {
    setText(e.target.value);
    /**
     * Allows components to avoid undesirable loading states by waiting for content to load
     * before transitioning to the next screen. It also allows components to defer slower,
     * data fetching updates until subsequent renders so that more crucial updates can be
     * rendered immediately.
     *
     * The `useTransition` hook returns two values in an array.
     *
     * The first is a boolean, React’s way of informing us whether we’re waiting for the transition to finish.
     * The second is a function that takes a callback. We can use it to tell React which state we want to defer.
     *
     * **If some state update causes a component to suspend, that state update should be wrapped in a transition.**
    */
    
    startTransition(()=>{
      // FunFact: For practice we can slow down our CPu, into dev tools of browser, into Performance, CPU: 4x slowdown
      
      // slow down CPU, THIS IS GONNA HAPPEN IN BACKGROUND WITH TRANSITION
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src='/vite.svg' alt='' />
          </div>
        );
      });
      //A transition is used principal for setSomething, in background
      setItems(newItems);
    });

  };
  return (
    <BlackContainer>  
      <section>
        <form className='form'>
          <input type='text' className='form-input' value={text} onChange={handleChange} />
        </form>

        <h4>Items Below</h4>
        { isPending 
            ? <h2>Loading...</h2>
            : (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', marginTop: '2rem', }} >
                {items}
              </div>
            )
        }
        <h2>Show SlowComponent: {showSlowComponent ? "True":"False"}</h2>
        <button className='btn' onClick={()=>{setShowSlowComponent(!showSlowComponent)}} >Toggle Vite Icons</button>
        <Suspense fallback={ <h2>Loading...</h2> }> 
          {showSlowComponent && <SlowComponent /> }
        </Suspense>

      </section>
    </BlackContainer>
  );
};
export default LatestReact;
