import React from "react";
import "../Description.css"
import data from "../data";

function Description(props){
    const dataArray = data
    return(
        <div>
            <h1>{dataArray[0].title}</h1>
            <h2>{dataArray[0].location}</h2>
            <p>{dataArray[0].description}</p>
            <h4>{dataArray[0].price}</h4>
            <h5>{dataArray[0].stats.rating}</h5>
            <h1 className="description--x" onClick={props.handleClick}>x</h1>
       
        </div>
    )    
}

export default Description;