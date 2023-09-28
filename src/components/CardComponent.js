import React from "react";
import Card from "./Card";
import data from "../data";

function CardComponent(){
    return(
        data.map(card => 
            <Card
                key={card.id}
                img={card.coverImg}
                rating={card.stats.rating}
                reviewCount={card.stats.reviewCount}
                location={card.location}
                title={card.title}
                price={card.price}
                openSpots={card.openSpots}
            />
        )
    )
}

export default CardComponent;