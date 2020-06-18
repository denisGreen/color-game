import React, { useState, useRef, useEffect, useCallback } from "react";
import "./color-card.css";
import PropTypes from "prop-types";

const ColorCard = ({ color, clicked, onClick, id }) => {


  return (
    <div
      id={id}
      className={"color-card" +(clicked ? " clicked" : "")}
      onClick={onClick}
    >
        <div className={"color-card-inner" }>
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

ColorCard.propTypes = {
  color: PropTypes.string.isRequired,
  clicked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}


export default ColorCard;
