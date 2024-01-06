import { BlackContainer } from "../../Containers";

/**
 * This is an incorrect componente, where useState is not used, and re-rendering dont apper
 * @param {string} id it's the id for the title section 
 * @returns 
 */
function NoComponent({ id }){
  
  return(
    <BlackContainer specialTitle="No component" idTitle={id}>
      <br />
      <br />
      <br />
      <h2>The'res no struture for this part</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </BlackContainer>
  );
};

export default NoComponent;
