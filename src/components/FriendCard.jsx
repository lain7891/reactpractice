import React from 'react';
import "./FriendCard.css"


const FriendCard = (props) => {
    return (
        <div>
            
    <div className="card">
      <div className="img-container">
        <img
          alt={props.name}
          src={props.image}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.occupation}
          </li>
        </ul>
      </div>
    </div>
  
        </div>
    );
};

export default FriendCard;