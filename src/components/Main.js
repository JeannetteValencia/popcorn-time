import React from "react"
export function Main(){
  const movieArr = [
    {
      id: 1,
      title: "Billy Elliot",
      rating: 9
    },

    {
      id: 2,
      title: "Forest Gump",
      rating: 9
    },

    {
      id: 3,
      title: "The Lion King",
      rating: 10
    }
  ]

  return (
    <>
      {movieArr.map((movie)=>{
        return (
          <div key ={movie.id}>
             <h2>{movie.title}</h2>
             <p>Rating: {movie.rating}</p>
           </div>
        )
      })}
    </>
  )
}