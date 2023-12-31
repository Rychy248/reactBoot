import './App.css'
import Counter from './components/Counter'
import SubAppPart1 from './components/01-useState/SubAppPart1'
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
    "m02-useEffect":[],
    "m03-conditional-rendering":[],
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
    </>
  )
}

export default App
