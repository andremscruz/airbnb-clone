import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import CardComponent from "./components/CardComponent"
import Description from "./components/Description"

function App() {  
  const [showDescription, setShowDescription] = useState(false);
  
  const handleClick = () => {
    setShowDescription(!showDescription);
  }
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {!showDescription && <CardComponent handleClick = {handleClick}/>}
      </section>
      {showDescription && <Description handleClick = {handleClick} />}
    </div>
  )
}

export default App;
