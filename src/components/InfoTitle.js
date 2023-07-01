import React from "react";
import '../styles/infoTitle.css'

function InfoTitle (props) {
    return (
        <div className="infoTitle">
            <h3>{props.title}</h3>
        </div>
        )
}



export default InfoTitle;