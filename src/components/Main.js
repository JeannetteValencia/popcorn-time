import React from "react"
import Movie from "./Movie"
import moviesArr from "../data/movies.json"
export function Main(){

  return (
    <>
    {moviesArr.map((movie)=>{
      return <Movie key={movie.id} title={movie.title} year={movie.year} rating={movie.rating} imgURL={movie.imgURL}/>
    })}

    </>
  )
}