import React, { Component } from 'react'
import "./AddMovie.css"

export default class AddMovie extends Component {
  constructor(props){
    super(props)
    this.state={
      title: ""
    }
  }

  handleTitleChange = (event)=>{
    this.setState({title: event.target.value})
  }
  render() {
    return (
      <div className="AddMovie">
        <h2>Add a new Movie</h2>
        <form>
          <label>
            Title:
            <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange}></input>
          </label>
           <button>Submit</button>
        </form>
      </div>
    )
  }
}
