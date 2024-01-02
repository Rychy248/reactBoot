import './App.css'
import Counter from './components/Counter'
import SubAppPart1 from './components/01-useState/SubAppPart1'
import SubAppPart2 from './components/02-useEffect/SubAppPart2'

import Navbar from './components/Layout/Nav'

function App() {
  const ids = {
    "m01-useState":[
      "s01-error-example",
      "s02-useState-basics",
      "s03-useState-array",
      "s04-useState-object",
      "s05-useState-gotcha",
    ],
    "m02-useEffect":[
      "s01-code-example",
      "s02-useEffect-basics",
      "s03-multiple-effects",
      "s04-fetch-data",
      "s05-cleanup-function",
    ],
    "m03-conditional-rendering":[
      "s01-multiple-returns-basics",
      "s02-multiple-returns-fetch-data",
      "s03-hooks-rule",
      "s04-short-circuit-overview",
      "s05-short-circuit-examples",
      "s06-toggle-challenge",
      "s07-user-challenge",
    ],
    "m04-project-structure":[],
    "m05-leverage-js":[],
    "m06-forms":[],
    "m07-useRef":[],
    "m08-custom-hooks":[],
    "m09-context-api":[],
    "m10-useReducer":[],
    "m11-performance":[],
  };

  return (
    <>
      <Navbar links={ids}/>
      <Counter />
      <SubAppPart1 ids={ids["m01-useState"]} />
      <SubAppPart2 ids={ids["m02-useEffect"]} />
    </>
  )
}

export default App
