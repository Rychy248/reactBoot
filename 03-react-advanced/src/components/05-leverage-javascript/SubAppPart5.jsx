

import ListPeople from "./components/ListPeople"

/**
 * 
 * @param {[]} ids ids for all titles of componets excercices
 * @returns 
 */
function  SubAppPart5({ ids }) {

  const arrayIds = ids[Object.keys(ids)[0]];
  return (
    <>
      <ListPeople id={arrayIds[0]} />
    </>
  )
}

export default SubAppPart5;
