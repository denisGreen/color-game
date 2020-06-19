import React from "react";
import "./side-box.css";

const SideBox = (props)=>{
    return(
        <aside className={`side-box ${props.positionClass}`}>
            <h2 className="side-box-text">Place for the advertisment</h2>
        </aside>
    )
}

export default SideBox;