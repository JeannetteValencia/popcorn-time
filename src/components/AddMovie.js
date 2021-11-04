import React, { Component } from 'react'
import "./AddMovie.css"

export default class AddMovie extends Component {
  constructor(props){
    super(props)
    this.state={
      title: "",
      year: 1900,
      rating: 0,
    }
  }

  handleInputChange =(event)=>{
    const inputName = event.target.name;
    this.setState({[inputName]: event.target.value})
  }
  render() {
    return (
      <div className="AddMovie">
        <h2>Add a new Movie</h2>
        <form>
          <label>
            Title:
            <input type="text" name="title" min="1900" max="2050" value={this.state.title} onChange={this.handleInputChange}></input>
          </label>
          <label>
            Year:
            <input type="number" name="year" value={this.state.year} onChange={this.handleInputChange}></input>
          </label>
          <label>
            Year:
            <input type="number" name="rating" min="0" max="10" value={this.state.rating} onChange={this.handleInputChange}></input>
          </label>
           <button>Submit</button>
        </form>
      </div>
    )
  }
}
