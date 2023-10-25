import React from "react"
import hero from "../images/photo-grid.png"
import "../Hero.css"

function Hero(props) {
    return (
        <section className={props.darkMode ? "hero--dark" : "hero"}>
            <img alt = "hero" src = {hero} className="hero--photo" /> 
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;