import defaultAvatar from "../../../assets/default-avatar.svg"

function Person({ id, name, nickName, images }) {
  return (
    <div className="part-5-user-target">  
      <div className="part-5-user-target-data">  
        <h3>User: {id}</h3>
        <h3>Name: {name}. NickName: {nickName || "-No Nickname-"}</h3>  
      </div>
      <img src={
        images?.[0]?.small?.url
        || defaultAvatar
      }></img>
    </div>
  );
};

export default Person;