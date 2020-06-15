import React from "react";
import "./color-card.css";

const ColorCard = ({ color, id, clicked, onClick }) => {
  return (
    <div
      id={id}
      className={"color-card" + (clicked ? " clicked" : "")}
      onClick={onClick}
    >
      <div className="color-card-inner">
        <div className="color-card-front">
          <p className="color-card-text">Click Me:)</p>
        </div>
        <div className="color-card-back" style={{ backgroundColor: color }}>
          <p className="color-card-text">Find the same color</p>
        </div>
      </div>
    </div>
  );
};

export default ColorCard;
