import React from "react";
import "./style.css";

function FriendCard(props) {
  return (

    <div className="card">
      <div className="img-container">
      <span 
          onClick={() => props.displayFriend(props.id)} 
          className="displayID">
          <img alt={props.name} src={props.image} />
      </span>
      </div>
    </div>
  );
}

export default FriendCard;
