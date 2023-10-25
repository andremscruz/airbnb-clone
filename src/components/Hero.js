import React from "react"
import hero from "../images/photo-grid.png"
import heroHalf from "../images/photo-grid-half.png"
import "../Hero.css"

function Hero(props) {
    return (
        <section className={props.darkMode ? "hero--dark" : "hero"}>
            {!props.showDescription ? <img alt = "hero" src = {heroHalf} className="hero--photo"/> 
            : <img alt = "hero" src = {hero} className="hero--photo" /> }
            {props.showDescription && <h1 className="hero--header">Online Experiences</h1>}
            {props.showDescription && <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>}
        </section>
    )
}

export default Hero;