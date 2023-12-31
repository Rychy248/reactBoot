import { WhiteContainer } from "../Containers";

/**
 * This is an incorrect componente, where useState is not used, and re-rendering dont apper
 * @param {string} id it's the id for the title section 
 * @returns 
 */
function ErrorExample({ id }){
  let count = 0;
  const handleClick = event => {count+=1; console.log(count)};

  return(
    <WhiteContainer specialTitle="Part 1, error state" idTitle={id}>
      <h2>useState error example</h2>
      <p>Look at the console</p>
      <h1>Counter: {count}</h1>
      <button onClick={handleClick}>{" "}+{" "}</button>
    </WhiteContainer>
  );
};

export default ErrorExample;
