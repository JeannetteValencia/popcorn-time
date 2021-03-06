import moviesArr from "../data/movies.json"
import React from "react"
import './App.css';
import {Header} from "./Header"
import {Footer} from "./Footer"
import {Main} from "./Main"


class App extends React.Component{
  state = {
    moviesToDisplay: moviesArr
  }

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
      <div className="App">
        <Header listOfMovies={this.state.moviesToDisplay}/>
        <Main createMovie={this.createMovie} listOfMovies={this.state.moviesToDisplay} buttonToRenderClassics={this.renderClassicsOnly}/>
        <Footer/>
      </div>
      )
  }
}

export default App;
