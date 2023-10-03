import React from "react";
import x from "../images/x.png"
import "../Description.css"

function Description(props){
    return(
        <div>
            <h1>{props.desc.title}</h1>
            <h2>{props.desc.location}</h2>
            <p>{props.desc.description}</p>
            <h4>{props.desc.price}</h4>
            <h5>{props.desc.stats.rating}</h5>
            <button onClick={props.handleClick}>
                <img alt = "" src = {x} className="description--x"/>
            </button>
        </div>
    )    
}

export default Description;