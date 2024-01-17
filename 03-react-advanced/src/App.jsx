import React, { useState } from 'react';

import './App.css'
import { Navbar, PartSelection, NoComponent } from './components/Layout'
import {
  Counter,
  SubAppPart1,
  SubAppPart2,
  SubAppPart3,
  SubAppPart4,
  SubAppPart5,
  SubAppPart6,
  SubAppPart7,
  SubAppPart8,
  SubAppPart9,
  SubAppPart10,
  SubAppPart11,
} from './components';


function App() {
  const [componentSelected, setComponentSelected] = useState("Part-11");

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
    "s01-navbar",
    "s02-first-Component",
    "s03-second-Component",
    "s04-about-Component",
    "s05-home-Component",
  ]};
  const part5 = {"m05-leverage-js":[
    "s01-Person"
  ]};
  const part6 = {"m06-forms":[
    "s01-controlled-inputs",
    "s02-user-challenge",
    "s03-multiple-inputs",
    "s04-other-inputs",
    "s05-05-form-data",
  ]};
  const part7 = {"m07-useRef":[
    "s01-UseRef",
  ]};
  const part8 = {"m08-custom-hooks":[
    "s01-Toggle",
    "s02-Custom-Hooks",
  ]};
  const part9 = {"m09-context-api":[
    "s01-Prop-drilling",
    "s02-context-api",
  ]};
  const part10 = {"m10-useReducer":[
    "s01-useReducer-intro",
    "s02-useReducer-basics",
  ]};
  const part11 = {"m11-performance":[
    "s01-performance-lower-state-problem",
    "s02-performance-lower-state-solution",
    "s03-performance-lower-state-challenge",
    "s04-performance-hooks-useCallback",
    "s05-performance-function-memo",
    "s06-performance-Memoization",
    "s07-performance-react18",
  ]};

  const options={
    "Counter":{ ids:{"counter":[]}, component:Counter},
    "Part-1":{ ids:{...part1}, component:SubAppPart1},
    "Part-2":{ ids:{...part2}, component:SubAppPart2},
    "Part-3":{ ids:{...part3}, component:SubAppPart3},
    "Part-4":{ ids:{...part4}, component:SubAppPart4},
    "Part-5":{ ids:{...part5}, component:SubAppPart5},
    "Part-6":{ ids:{...part6}, component:SubAppPart6},
    "Part-7":{ ids:{...part7}, component:SubAppPart7},
    "Part-8":{ ids:{...part8}, component:SubAppPart8},
    "Part-9":{ ids:{...part9}, component:SubAppPart9},
    "Part-10":{ ids:{...part10}, component:SubAppPart10},
    "Part-11":{ ids:{...part11}, component:SubAppPart11},
  };  
  
  return (
    <>
      <Navbar links={(options[componentSelected].ids)}/>
      
      <PartSelection
        options={Object.keys(options)}
        componentSelected={componentSelected}
        setComponentSelected={setComponentSelected}
      />
      
      {React.createElement(options[componentSelected].component, {
        ids: options[componentSelected].ids,
      })}

    </>
  );
}

export default App
