import React from "react"
import "./Header.css"

export function Header(props){
  return (
    <div className="Header">
      <h1>Welcome to Popcorn Time</h1>
      <div>
         Number of movies: {props.listOfMovies.length}
      </div>
    </div>
  )
  }