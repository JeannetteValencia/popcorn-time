import React from "react"
import Movie from "./Movie"
import moviesArr from "../data/movies.json"
export class Main extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      moviesToDisplay: moviesArr
    }
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
        <div className="movie-list">
          {this.state.moviesToDisplay.map((movie)=>{
            return <Movie key={movie.id} title={movie.title} year={movie.year} rating={movie.rating} imgURL={movie.imgURL}/>
          })}
  
        </div>
      </>
    )
  }
}