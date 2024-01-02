
import { WhiteContainer } from "../Containers";

const url = 'https://api.github.com/users';

function FetchData({ id }) {
  return(
    <WhiteContainer specialTitle="Part 2, useEffect FetchData" idTitle={id}>
      <h2>fetch data example</h2>;
    </WhiteContainer>
  );
};

export default FetchData;
