import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import CardComponent from "./components/CardComponent"

function App() {         
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        <CardComponent />
      </section>
    </div>
  )
}

export default App;
