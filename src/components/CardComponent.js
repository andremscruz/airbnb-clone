import React from "react";
import Card from "./Card";
import data from "../data";

function CardComponent(props){
    return(
        data.map(card => 
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