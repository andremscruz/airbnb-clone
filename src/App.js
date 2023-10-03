import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import CardComponent from "./components/CardComponent"
import Description from "./components/Description"
import DescriptionComponent from "./components/DescriptionComponent"
import Card from "./components/Card"

function App() {  
  const [showDescription, setShowDescription] = useState();
  const [clickedCardDescription, setClickedCardDescription] = useState();
  
  const handleClick = () => { 
    setClickedCardDescription(<DescriptionComponent/>)
  }
  const handleDescClick = () => {
    setShowDescription(!showDescription);
  }
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {!showDescription && <CardComponent handleClick = {handleDescClick}/>}
      </section>
      {showDescription && <DescriptionComponent handleClick = {handleDescClick} />}
    </div>
  )
}

export default App;
