

import { BlackContainer } from "../Containers";
import Navbar from "./Navbar/Navbar";
import Example from "./Example";
import { About, Home} from "./Pages";

/**
 * 
 * @param {[]} ids ids for all titles of componets excercices
 * @returns 
 */
function  SubAppPart4({ ids }) {

  const arrayIds = ids[Object.keys(ids)[0]];

  return (
    <>
      <Navbar id={arrayIds[0]} />
      <Example id1={arrayIds[1]} id2={arrayIds[2]} />
      <About id={arrayIds[3]}/>
      <Home id={arrayIds[4]}/>
    </>
  )
}

export default SubAppPart4;
