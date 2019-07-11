import React from "react";
import "./card.css";

const Card = props => (
  <div onClick={() => props.randomizeCards(props.id)} className="card col-md-3">
      <div  className="img-container"><img alt={props.name} src={props.image} id={props.id}/> </div>
  </div>
);

export default Card;
