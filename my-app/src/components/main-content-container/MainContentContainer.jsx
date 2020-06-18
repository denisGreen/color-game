import React from "react";
import "./main-content-container.css"

const MainContentContainer = (props) => {
    return (
        <div className="main-content-container">
            {props.children}
        </div>
    )
}
 

export default MainContentContainer;