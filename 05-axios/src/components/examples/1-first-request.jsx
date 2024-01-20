
import { useEffect, Suspense, useState, useCallback } from 'react';

import ContainerWhite from '../container';
import axios from "axios";

import SingleCheckBox from "../tools/SingleCheckBox"

// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

function FirstRequest({ }) {
  const [response, setResponse] = useState(undefined);
  const [logsFlag, setLogsFlag] = useState(false);
  const [componentState, setComponentState ] = useState("Loading");
  /**
   * - import axios
   * 
   * - axios.get(url)
   * - axios.post(url)
   * - axios.patch/put(url)
   * - axios.delete(ur l)
   * 
   * - default get axios(url)
   * 
   * - returns a promise
   * - response data located in data property
   * - error in error.response
   * 
   */
  
  const printLine = useCallback(props => { if(logsFlag) console.log(`${props}`); ; },[setResponse]);

  const colorStyle = (color)=> ({
    "background-color": color,
    "display": "inline-flex",
    "border": "0px",
    "width": "2.5rem",
    "height": "2.5rem",
    "border-radius": "50%",
    "transition": "transform 0.3s ease",
    "margin":"0.3rem",
    "padding":"0.3rem",
  });
  useEffect(() => {
    printLine('first axios request');
    axios(url)
    .then((axiosResponse)=>{
      setResponse(axiosResponse);
      setComponentState("Loaded");
    })
    .catch((error)=>{
      printLine(error)
      setComponentState("Error")
    });
  }, []);

  return (
    <ContainerWhite>
      <h2 className='text-center'>first request</h2>
      <SingleCheckBox label="Logs active" check={logsFlag} setCheck={setLogsFlag} />

      {(componentState === "Loading") && <h1>Loading...</h1>}
      {(componentState === "Loaded") && (
        <>
          <h4>AXIOS Response</h4>
          <div className='first-example-container'>
            {/* {JSON.stringify(response.data)} */}
            {response.data.map(({id, name, price, image, colors, company, description, category, shipping}, index)=>(
              <div className='first-example-single-response'>
                <div className='first-example-single-response-c1'>
                  <h5>{name} Id:{id}</h5>
                </div>
                <div className='first-example-single-response-c2'>
                  <img src={image} alt='imag.png' className='first-example-img' />
                </div>
                <div className='first-example-single-response-c3'>
                  <p>Price: ${price}</p>
                  {colors.map((item, index)=> <div className='first-example-input-color' style={colorStyle(item)}></div> )}
                  <h6>Company: {company}</h6>
                </div>
                <div className='first-example-single-response-c4'>
                  <p> <b> Category: {category} || Shipping: {shipping} </b>  <br/> {description}</p>
                </div>
              </div>
            ))}
          </div> 
        </>
      )}

    </ContainerWhite>
  );
};

export default FirstRequest;
