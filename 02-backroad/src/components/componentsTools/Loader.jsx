import "./Loader.css";

import { Div } from "../tagsComponents"

export default function Loader({ width="50px", height="50px", style={}, className="" }) {
  return <Div
    className={`loader ${className}`}
    style={{
      width:width,
      height:height,
      ...style
    }}
  ></Div>
}