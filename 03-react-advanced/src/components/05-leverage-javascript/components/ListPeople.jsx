
import { useState, useEffect } from "react";

import Api from "./tools/Api";
import { BlackContainer } from "../../Containers";

import Person from "./Person";
import {Loader} from "../../componentsTools";

import "../static/styles.css"

function ListPeople({ id }) {
  const [people, setPeople] = useState([]);
  const [componentState, setComponentState] = useState("Loading");
  
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    Api("http://some-url",signal)
    .then((data)=>{
      setPeople(data);
      setComponentState("Loaded");
    })
    .catch(()=>{ setComponentState("Error"); });

    return () => { controller.abort(); };
  }, []);
  
  return(<BlackContainer specialTitle="Part 5 - laverage js" idTitle={id}>
    <h2>People</h2>
    
    { componentState === "Loading" && <Loader />}
    
    { componentState === "Loaded" &&
      <div className="part-5-user-container animate-fade">
        {people.map(({ id, name, nickName, images }, index)=>(
          <Person key={id} id={id} name={name} nickName={nickName} images={images}/>
        ))}
      </div>
    }
    { componentState === "Error" && <h3>Error in component</h3> }

  </BlackContainer>);
};

export default ListPeople;