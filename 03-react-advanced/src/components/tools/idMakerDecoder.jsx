

function idMakerDecoder(prefixId) {
  // const prefixId = "part6-3-multiple-input-"
  const idMaker = (id) => `${prefixId}${id}`; ;
  
  const idDecoder = (fullId) => {
    const regex = new RegExp(`^${prefixId}(.+)$`); // Use RegExp constructor with template literal && regex to match with the ID format
    const match = fullId.match(regex);
  
    if (match && match[1]) { // if there's match return the captured group without the prefix
      return match[1];
    } else { // if theres no data, return the original id
      return fullId;
    };
  };
  
  return [idMaker, idDecoder];
};

export default idMakerDecoder;