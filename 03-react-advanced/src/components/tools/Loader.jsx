import "./Loader.css";

function Loader({ width="50px", height="50px", style={}, className="" }) {
  return <div
    className={`loader ${className}`}
    style={{
      width:width,
      height:height,
      ...style
    }}
  ></div>
};

export default Loader;