import React from "react"
import star from "../images/star.png"
import "../Card.css"

function Card(props) {
    return (
        <button className = {props.darkMode ? "card--button--dark" : "card--button"}
        onClick={() => 
            props.handleClick(
                props.card.id,
                props.card.title,
                props.card.location,
                props.card.description,
                props.card.price,
                props.card.stats.rating,
                props.card.stats.reviewCount,
                props.card.openSpots)}>
            <div className="card">
            {props.card.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img alt = "card" src={`./images/${props.card.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img alt = "star" src={star} className="card--star" />
                <span>{props.card.stats.rating}</span>
                <span className="gray">({props.card.stats.reviewCount}) • </span>
                <span className="gray" style={{marginLeft: "3px"}}>{props.card.location}</span>
            </div>
            <p className="card--title">{props.card.title}</p>
            <p className="card--price"><span className="bold">From ${props.card.price}</span> / person</p>
        </div>
        </button>
        
    )
}
export default Card;