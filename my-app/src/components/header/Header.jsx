import React from "react";
import "./header.css";

const Header = () => {
  
  
  
  return (
    <div className="header" >
      <h1 className="header-text centered" ><span className="header-text-color-one" >Color</span> <span
      className="header-text-color-two">Cards</span> <span className="header-text-color-three">Game</span></h1>
      <h2 className="header-text centered">Find two cards with the same color</h2>
    </div>
  );
};

export default Header;

// const r = Math.floor(Math.random()*255).toString(16);
// 	const g = Math.floor(Math.random()*255).toString(16);
//   const b = Math.floor(Math.random()*255).toString(16);
//   const firstColor = `#${r}${g}${b}`;
//   console.log(firstColor);