import React, { Component } from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export class GifListContainer extends Component {
  
  state ={
    gifs: []
  }

  getGifs = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=zBG4VvUE9CahLHDFvINGfuGe5GH6XbAt`)
      .then(resp => resp.json())
      .then(gifs => {
        this.setState({
          gifs: gifs.data.slice(0,3)
        })
      })
  }

  render() {
    return (
      <div>
        <GifSearch getGifs={this.getGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer
