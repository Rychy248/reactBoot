const mP0 = {
  margin:"0",
  padding:"0",
};

const navStyle = {
  margin:"2rem 0rem",
  backgroundColor:"#909090",
  borderRadius:"20px",
  display:"flex",
  height:"auto",
  placeItems:"center",
  padding:"1rem",
};
const navContainerStyle = {
  display:"flex",
  flexDirection:"row",
  flexWrap:"wrap",
  height:"auto",
  placeItems:"center",
  columnGap:"3rem",
  rowGap:"0.5rem",
  justifyContent:"center",
  ...mP0
};
const navTitleStyle = {
  fontWeight:"bolder",
  grow:"1",
  order:"1",
  ...mP0
};

const navLinksStyle = {
  display:"flex",
  justifyContent:"center",
  placeItems:"center",
  flexGrow:"2",
  order:"2",
  gap:"0.8rem",
  ...mP0
};

const navLinkStyle = {
  fontWeight:"bolder",
  fontSize:"1.5rem",
  textDecoration: "underline",
  display:"flex",
  ...mP0
};

const userContainerStyle = {
  display:"flex",
  flexGrow:"1",
  justifyContent:"flex-end",
  placeItems:"center",
  order:"4",
  ...mP0
};
const userDataStyle = {
  display:"flex",
  placeItems:"center",
  fontWeight:"bolder",
  fontSize:"1.5rem",
  gap:"0.5rem",
  ...mP0
};
const userNameStyle = {
  placeSelf:"center",
  color:"#55FF55",
  fontSize:"2rem",
  ...mP0
};

export {
  navStyle,
  navContainerStyle,
  navTitleStyle,
  
  navLinksStyle,
  navLinkStyle,

  userContainerStyle,
  userDataStyle,
  userNameStyle
};