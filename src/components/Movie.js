import React from "react"
export default function Movie(props){
  function popular (rating){
      if(rating > 8) {
          return "Popular"
      }

    }
  return (
  <>
    <div className="movie">
      <div>
        <h2>{props.title}</h2>
          <p>Year: {props.year}</p>
          <p>Rating: {props.rating}</p>
          <p>{popular(props.rating)}</p>
      </div>
      <div>
        <img src={props.imgURL} alt="movie"></img>
      </div>
    </div>
  </>
  )
}