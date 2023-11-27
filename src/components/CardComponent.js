import React from "react";
import Card from "./Card";

function CardComponent(props){
    return(
        props.cards.map(card => 
            <Card
                key={card.id}
                card={card}
                handleClick = {props.handleClick}
                darkMode = {props.darkMode}
            />
        )
    )
}

export default CardComponent;