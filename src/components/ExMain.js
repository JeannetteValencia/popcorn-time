import React from "react"
import Movie from "./Movie"
import AddMovie from "./AddMovie"
export class Main extends React.Component{
  createMovie = (newMovieDetails) =>{
    //Code use to provide an id to the new movie created
    const arrayOfIds = this.state.moviesToDisplay.map(movie =>movie.id);
    newMovieDetails.id = Math.max(...arrayOfIds)+1

    this.setState((prevState, props)=>{
      const newList = [newMovieDetails, ...prevState.moviesToDisplay]
       return {moviesToDisplay: newList}
    })
  }
  renderClassicsOnly= ()=>{//arrow functions allow me to access this
    this.setState((prevState, props)=>{
      const newList= prevState.moviesToDisplay.filter((movie)=>{
         return movie.year<2000
      });
      return {moviesToDisplay: newList};
    })
  }
  render(){
    return (
      <>
        <div className="controls">
            <button onClick={this.renderClassicsOnly}>
              Display only classics
            </button>
          </div>

          <AddMovie addMovieHandler= {this.createMovie}/> 

        <div className="movie-list">
          {this.state.moviesToDisplay.map((movie)=>{
            return <Movie key={movie.id} title={movie.title} year={movie.year} rating={movie.rating} imgURL={movie.imgURL}/>
          })}
  
        </div>
      </>
    )
  }
}