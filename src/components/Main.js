import React from "react"
import Movie from "./Movie"
import AddMovie from "./AddMovie"
export class Main extends React.Component{
  
  render(){
    return (
      <>
        <div className="controls">
            <button onClick={this.props.buttonToRenderClassics}>
              Display only classics
            </button>
          </div>

          <AddMovie addMovieHandler= {this.props.createMovie}/>

        <div className="movie-list">
          {this.props.listOfMovies.map((movie)=>{
            return <Movie key={movie.id} title={movie.title} year={movie.year} rating={movie.rating} imgURL={movie.imgURL}/>
          })}
  
        </div>
      </>
    )
  }
}