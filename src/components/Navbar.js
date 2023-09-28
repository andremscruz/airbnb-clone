import React from "react"
import logo from "../images/airbnb-logo.png"
import "../Navbar.css"

function Navbar() {
    return (
        <nav>
            <img alt = "logo" src={logo} className="nav--logo" />
        </nav>
    )
}

export default Navbar;