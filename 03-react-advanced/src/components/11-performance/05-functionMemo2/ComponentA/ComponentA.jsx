
import { useState } from "react";

function ComponentA({ printLine }) {
  const [people, setPeople] = useState();

  printLine("Component A Rendered");

  return(<>

  </>);
};

export default ComponentA;