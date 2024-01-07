import React, { useState } from 'react';

import './App.css'

import Navbar from './components/Layout/Nav'
import PartSelection from './components/Layout/PartSelection';
import NoComponent from './components/Layout/tools/NoComponent';

import Counter from './components/Counter'
import SubAppPart1 from './components/01-useState/SubAppPart1'
import SubAppPart2 from './components/02-useEffect/SubAppPart2'
import SubAppPart3 from './components/03-conditional-rendering/SubAppPart3';
import SubAppPart4 from './components/04-project-structure/SubAppPart4';

function App() {
  const [componentSelected, setComponentSelected] = useState("Part-4");
  const part1 = {"m01-useState":[
    "s01-error-example",
    "s02-useState-basics",
    "s03-useState-array",
    "s04-useState-object",
    "s05-useState-gotcha",
  ]};
  
  const part2 = {"m02-useEffect":[
    "s01-code-example",
    "s02-useEffect-basics",
    "s03-multiple-effects",
    "s04-fetch-data",
    "s05-cleanup-function",
  ]};
  
  const part3 = {"m03-conditional-rendering":[
    "s01-multiple-returns-basics",
    "s02-multiple-returns-fetch-data",
    "s03-hooks-rule",
    "s04-short-circuit-overview",
    "s05-short-circuit-examples",
    "s06-toggle-challenge",
    "s07-user-challenge",
  ]};
  
  const part4 = {"m04-project-structure":[
  ]};
  
  const part5 = {"m05-leverage-js":[
  ]};
  
  const part6 = {"m06-forms":[
  ]};
  
  const part7 = {"m07-useRef":[
  ]};
  
  const part8 = {"m08-custom-hooks":[
  ]};
  
  const part9 = {"m09-context-api":[
  ]};
  
  const part10 = {"m10-useReducer":[
  ]};
  
  const part11 = {"m11-performance":[
  ]};
  const options={
    "Counter":{ ids:{"counter":[]}, component:Counter},
    "Part-1":{ ids:{...part1}, component:SubAppPart1},
    "Part-2":{ ids:{...part2}, component:SubAppPart2},
    "Part-3":{ ids:{...part3}, component:SubAppPart3},
    "Part-4":{ ids:{...part4}, component:SubAppPart4},
    "Part-5":{ ids:{...part5}, component:NoComponent},
    "Part-6":{ ids:{...part6}, component:NoComponent},
    "Part-7":{ ids:{...part7}, component:NoComponent},
    "Part-8":{ ids:{...part8}, component:NoComponent},
    "Part-9":{ ids:{...part9}, component:NoComponent},
    "Part-10":{ ids:{...part10}, component:NoComponent},
    "Part-11":{ ids:{...part11}, component:NoComponent},
  };  

  const ids = {
    /** FOR MOMENT, THAN, change this for a component render condicionality */
    "m01-useState":part1["m01-useState"],
    "m02-useEffect":part2["m02-useEffect"],
    "m03-conditional-rendering":part3["m03-conditional-rendering"],
    "m04-project-structure":part4["m04-project-structure"],
    "m05-leverage-js":part5["m05-leverage-js"],
    "m06-forms":part6["m06-forms"],
    "m07-useRef":part7["m07-useRef"],
    "m08-custom-hooks":part8["m08-custom-hooks"],
    "m09-context-api":part9["m09-context-api"],
    "m10-useReducer":part10["m10-useReducer"],
    "m11-performance":part11["m11-performance"],
  };
  
  return (
    <>
      <Navbar links={(options[componentSelected].ids)}/>
      
      <PartSelection
        options={Object.keys(options)}
        componentSelected={componentSelected}
        setComponentSelected={setComponentSelected}
      />
      {/* 
        <Counter />
        <SubAppPart1 ids={ids["m01-useState"]} />
        <SubAppPart2 ids={ids["m02-useEffect"]} />
      */}
      {React.createElement(options[componentSelected].component, {
        ids: options[componentSelected].ids,
      })}
    </>
  );
}

export default App
