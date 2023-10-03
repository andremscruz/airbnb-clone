import React from "react";
import Description from "./Description";
import data from "../data";

function DescriptionComponent(props){
    return(
        data.map(desc => 
            <Description
                key={desc.id}
                desc={desc}
                handleClick = {props.handleClick}
            />
    ))
}

export default DescriptionComponent;