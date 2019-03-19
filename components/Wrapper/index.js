import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className= {(props.shakeWrapper==="true") ? "wrapperShake" : "wrapper"}>{props.children}</div>;
}

export default Wrapper;
