import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="top">
      <div className="title-area-left"></div>
      <div><h1 className="title">{props.heading}</h1></div>
      <div><h4 className="score-report">Score: {props.score} | Top Score: {props.topScore}</h4></div>
    </div>
  );
}

export default Title;
