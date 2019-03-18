import React from "react";
import "./style.css";

function FriendCard(props) {
  return (

    <div className="card">
      <div className="img-container">
      {/* <span onClick={() => props.displayFriend(props.id)} className="displayID"> */}
      {/* // onClick={() => this.setState({clickedId: props.id})} 
      // className="displayID"> */}
      <span 
          onClick={() => props.displayFriend(props.id)} 
          className="displayID">
          <img alt={props.name} src={props.image} />
      </span>
      </div>
      {/* <div className="content"> */}
        {/* <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul> */}
      {/* </div> */}
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove"> */}
        {/* 𝘅 */}
      {/* </span> */}
    
    </div>
  );
}

export default FriendCard;
