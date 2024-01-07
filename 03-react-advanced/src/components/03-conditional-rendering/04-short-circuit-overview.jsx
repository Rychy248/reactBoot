import { useState } from 'react';
import { WhiteContainer } from '../Containers';

function boolStr(elementToTest) {
  return `(${ elementToTest ? "true" : "false" })`;
};

function ParaGrapConditinal({ rigthSide, element}) {
  
  const completRigth = ()=> `${rigthSide}${boolStr(element)}`; ;

  return(<>
    <hr />
    <p>{completRigth()}<b> || </b>"HelloOR"(true)<i> return = </i><b>{element || "HelloOR"}</b></p>
    <p>{completRigth()}<b> && </b>"HelloAND"(true)<i> return = </i><b>{element && "HelloAND"}</b></p>
  </>);
}

function ShortCircuitOverview({ id }) {
  const [showEvaluations, setShowEvaluations] = useState(false);
  // falsy
  const [text, setText] = useState('');
  const [number, setNumber] = useState(0);
  const [boolean, setBolean] = useState(false);
  const [nullValue, setNullValue] = useState(null);
  const [undefinedValue, setUndefinedValue] = useState(undefined);
  const [notANumber, setNotANumber] = useState(NaN);
  const [emtyArr, setEmptyArr] = useState([]);
  // truthy, bascally, all of objects or other
  const [name, setName] = useState('susan');

  const codeExample = text || 'hello world';

  const dataType = [
    {text:`text empty`, value:text},
    {text:`number zero`, value:number},
    {text:`Boolean false`, value:boolean},
    {text:`Null value`, value:nullValue},
    {text:`Undefined value`, value:undefinedValue},
    {text:`Not A Number`, value:false},
    {text:`Empty Array`, value:emtyArr},
  ];

  return(
    <WhiteContainer specialTitle="Part 3, Short Circuit overview" idTitle={id}>
      <h2>short circuit overview</h2>

      <p>
        In JavaScript, short-circuit evaluation is a technique that allows you to use logical operators (such as && and ||) to perform conditional evaluations in a concise way.
        <br /><br />
        The && operator (logical AND) returns the first operand if it is "falsy", or the second operand if the first operand is "truthy".
        <br /><br />
        The || operator (logical OR) returns the first operand if it is "truthy", or the second operand if the first operand is "falsy".
      </p>
      
      <div>
        <input type='checkbox' checked={showEvaluations} onChange={()=> setShowEvaluations(prev => !prev)} />
        <label>Show circuits evaluations</label>
      </div>

      {showEvaluations &&
        dataType.map(({text, value}, index)=>(
          <ParaGrapConditinal key={index} rigthSide={text} element={value} />
        ))
      }
      {showEvaluations &&
        <ParaGrapConditinal rigthSide={"Name susan"} element={name} />
      }
      <hr />
      {codeExample}
    
    </WhiteContainer>
  );
};
export default ShortCircuitOverview;
