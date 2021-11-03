import React from "react"
import movieArr from "../data/movies.json"
export default function Movie(){

  return (
    <>
      {movieArr.map((movie)=>{
        return (
          <div key ={movie.id} className="movie">
            <div>
              <h2>{movie.title}</h2>
              <p>Year: {movie.year}</p>
              <p>Rating: {movie.rating}</p>
            </div>
             <div>
                <img src={movie.imgURL} alt="movie"></img>
             </div>
           </div>
        )
      })}
    </>
  )
}