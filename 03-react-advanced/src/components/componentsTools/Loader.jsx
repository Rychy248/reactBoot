import "./Loader.css";

export default function Loader({ width="50px", height="50px", style={}, className="" }) {
  return (
    <div
      className={`loader ${className}`}
      style={{
        width:width,
        height:height,
        ...style
      }}
    ></div>
  );
}