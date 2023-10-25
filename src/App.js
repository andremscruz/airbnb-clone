import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Description from "./components/Description"
import CardComponent from "./components/CardComponent"


function App() {  
  const [showDescription, setShowDescription] = useState(true);
  const [darkMode, setDarkMode] = useState(false)
  const [description, setDescription] = useState(
    {
      id: "" ,
      title: "" ,
      description: "" ,
      price: "" ,
      rating: "" ,
      reviewCount: "" , 
      location: "" ,
      openSpots: "" 
    })

  function handleClick(
    cardId,
    cardTitle,
    cardLocation,
    cardDescription,
    cardPrice,
    cardRating,
    cardReviewCount,
    cardOpenSpots){
      setShowDescription(prevDescription => !prevDescription);
      setDescription(
        {
          id: cardId ,
          title: cardTitle ,
          description: cardDescription  ,
          price: cardPrice ,
          rating: cardRating ,
          reviewCount: cardReviewCount , 
          location: cardLocation,
          openSpots: cardOpenSpots ,
        })
  }

  function toggleDarkMode(){
    setDarkMode(prevState => !prevState)
  }
  
  return (
    <div className ={darkMode ? "container--dark" : ""} >
       <Navbar darkMode = {darkMode} toggleDarkMode = {toggleDarkMode}/>
      <Hero darkMode = {darkMode} showDescription = {showDescription}/>
      <section className="cards-list">
        {showDescription ? <CardComponent handleClick = {handleClick} darkMode = {darkMode}/> :
        <Description
          id = {description.id}
          title = {description.title} 
          description = {description.description} 
          price = {description.price} 
          rating = {description.rating} 
          reviewCount = {description.reviewCount}  
          location = {description.location} 
          openSpots = {description.openSpots}           
          handleClick = {handleClick}
          darkMode = {darkMode}
          />}
      </section>
    </div>
  )
}

export default App;
