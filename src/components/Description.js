import React from "react";
import "../Description.css"

function Description(props){
    return(
        <div className="description--container">
            <nav className="nav">
                
                <div className="description--title">
                    {props.title}
                </div>
                <div className="description--location">
                    {props.location}
                </div>
                <div className="description--x" onClick={props.handleClick}>
                    <div className="x-line"></div>
                    <div className="x-line"></div>
                </div>    
            </nav>
            <main>
            
                {props.description} 
            </main>
            <footer>
                <p>{props.reviewCount}</p>
                <p>{props.price}</p>
                <p>{props.rating}</p>
                <p>{props.openSpots}</p>
            </footer>
        </div>
    )    
}

export default Description;