import { BlackContainer } from "../../Containers";

function SecondComponent({ id }) {
  return(
    <BlackContainer specialTitle="Project structure - Second Component" idTitle={id}>
      <h2>Second Component</h2>
    </BlackContainer>
  );
};

export default SecondComponent;