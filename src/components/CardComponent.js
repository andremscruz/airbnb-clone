import React from "react";
import Card from "./Card";
import data from "../data";

function CardComponent(){
    return(
        data.map(card => 
            <Card
                key={card.id}
                card={card}
            />
        )
    )
}

export default CardComponent;