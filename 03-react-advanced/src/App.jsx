import './App.css'
import Counter from './components/Counter'
import SubAppPart1 from './components/01-useState/SubAppPart1'
import Navbar from './components/Layout/Nav'

function App() {
  const ids = {
    "r01-useState":[
      [
        "r01-error-example-1",
        "r01-error-example-2"
      ]
    ],
    "r02-useEffect":[],
    "r03-conditional-rendering":[],
    "r04-project-structure":[],
    "r05-leverage-js":[],
    "r06-forms":[],
    "r07-useRef":[],
    "r08-custom-hooks":[],
    "r09-context-api":[],
    "r10-useReducer":[],
    "r11-performance":[],
  };

  return (
    <>
      <Navbar links={ids}/>
      <Counter />
      <SubAppPart1 ids={ids["r01-useState"]} />
    </>
  )
}

export default App
