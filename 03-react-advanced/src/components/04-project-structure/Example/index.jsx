
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";


function Example({ id1, id2 }) {
  return (<>
    <FirstComponent id={id1}/>
    <SecondComponent id={id2}/>
  </>);
};


export {
  FirstComponent,
  SecondComponent
};

export default Example;