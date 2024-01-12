
import { useState, useEffect } from 'react';
import { WhiteContainer } from '../Containers';

import { SingleCheckBox, idMakerDecoder, Api, InputRowMaker, Loader } from '../tools';



function OtherInputs({ id }) {
  const [idMaker, idDecoder] = idMakerDecoder("part6-4-others-input-");
  const [componentState, setComponentState ] = useState("Loading");

  const [shipping, setShipping] = useState(false);
  const [fetchApi, setFetchApi] = useState(false);
  const [frameworks, setFrameworks] = useState([]);
  const [framework, setFramework] = useState('');
  

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    
    setComponentState("Loading");

    if (fetchApi && frameworks.length === 0) {
      Api("/FetchFrameworks-part6-otherInputs","Get",500,signal)
        .then( data=> {
          setFrameworks(data);
          setComponentState("Loaded");
          setFramework(data[0]);
        })
        .catch( err => {
          if(err.name === "AbortError"){
            console.log("Fetch Aborted");
            setComponentState("Loaded");
          }else{
            setComponentState("Error");
          };
        })
        ;
      }else{
        setComponentState("Loaded");
      };

    return () => { abortController.abort(); };

  }, [fetchApi]);
  

  function handlerChange({ target:{id:fullId, name, value  }, key }) {
    const id = idDecoder(fullId);
    switch (id) {
      case "fetch-api": setFetchApi(!fetchApi); break;
      case "shipping": setShipping(!shipping); break;
      case "framework": setFramework(value); break;
    
      default:
        break;
    }
  };

  function handlerSubmit(e) {
    e.preventDefault();
    if(framework.length > 0){
      alert(`DATA SELECTED\nFramework Selected: ${framework}\nShipping: ${shipping?"Yes":"No"}` );
      setFramework("");
    }else{
      alert("Error, no framework Selected");
      if (frameworks.length == 0)  setFetchApi(true); ;
    };
  };

  return (
    <WhiteContainer specialTitle="Part 6 - Other inputs" idTitle={id}>
      {/* fetchApi */}
      { fetchApi || (
          <SingleCheckBox
            checkLabel="Fetch Api Data for Frameworks Selection"
            check={fetchApi}
            setCheck={setFetchApi}
            enrichStyle={{ textAlign:"center" }}
          />
      )}

      <form className='form' onSubmit={handlerSubmit}>
        <h4>Other Inputs</h4>
        {/* shipping */}
        <InputRowMaker
          id={idMaker("shipping")}
          displayContent="Free Shipping"
          value={shipping}
          onChange={handlerChange}
          type='checkbox'
        />

        {/* Select Framework */}
        { fetchApi && (
          <>
            {componentState === "Loading" && <Loader />}
            {componentState === "Loaded" &&(
              <div className='form-row' style={{ textAlign: 'left' }}>
                {framework && <h4>Framework Selected: {framework}</h4>}
                <label htmlFor={idMaker('framework')} className='form-label'> Framework </label>
                <select
                  className='form-input'
                  value={framework || ( frameworks.length > 0 ? frameworks[0] : "None")}
                  id={idMaker("framework")}
                  onChange={handlerChange}
                >
                  {frameworks.map((frame, index)=>( <option key={index}>{frame}</option> ))}
                  {frameworks.length === 0 && (<option disabled={true} >None</option>)}
                </select>
              </div>
            )}
            {componentState === "Error" && <h2>Something went wrong! :( </h2>}
          </>
        )}

        <button type='submit' className='btn btn-block'>
          submit
        </button>

      </form>      
    </WhiteContainer>
  );
};
export default OtherInputs;
