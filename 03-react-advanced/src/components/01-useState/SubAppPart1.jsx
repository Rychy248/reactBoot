import {ErrorExample, RigthExample}  from "./01-error-example"

function SubAppPart1({ ids }) {
  return (
    <>
      <ErrorExample id={ids[0][0]} />
      <RigthExample id={ids[0][1]} />
    </>
  )
}

export default SubAppPart1;
