import React from "react"
import star from "../images/star.png"
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
                    
                </div>    
            </nav>
            <main>
                <h1>{props.description} </h1>
            </main>
            <footer className="description--footer">
                <img alt = "star" src={star} className="description--star" />
                    <p>{props.rating}</p>
                    <p className="grey">({props.reviewCount})</p>
                    <p className="description--price">Price: <span className="bold">From ${props.price}</span> / person</p>
                    <p className="description--openSpots">{props.openSpots === 0 ? "Sold Out" : `Open Spots: ${props.openSpots}`}</p>              
            </footer>
        </div>
    )    
}

export default Description;