import React, { Component } from 'react'

export class GifSearch extends Component {

  state = {
    query: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.getGifs(this.state.query)
    event.target.reset()
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="query" onChange={this.handleChange} value={this.state.query} />
        <button>Search GIPHY</button>
      </form>
    )
  }
}

export default GifSearch
