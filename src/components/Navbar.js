import React from "react"
import logo from "../airbnb-logo.png"

function Navbar() {
    return (
        <nav>
            <img alt = "logo" src={logo} className="nav--logo" />
        </nav>
    )
}

export default Navbar;