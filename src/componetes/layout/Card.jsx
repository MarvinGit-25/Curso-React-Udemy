import React from "react";
import "./Card.css";

const card = (props) => {
  
    const Cardstyle = {
      backgroundColor: props.color,
      borderColor: props.color || "#CCCCFF"
    }

  return (
    <div className="card" style={Cardstyle}>
      <div className="title">{props.titulo}</div>
      <div className="content">
        {props.children}
      </div>
      
    </div>
  );
};

export default card;
