import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Description from "./components/Description"
import CardComponent from "./components/CardComponent"
import experiences from "./service/experience"


function App() {  
  const [cards, setCards] = useState([])
  const [showDescription, setShowDescription] = useState(false);
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

  useEffect(() => {
    experiences.getAll().then(exp => setCards(exp))
  },[])



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
      {!showDescription && <Hero darkMode = {darkMode} />}
      <section className="cards-list">
        {!showDescription ? <CardComponent cards = {cards} handleClick = {handleClick} darkMode = {darkMode}/> :
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
