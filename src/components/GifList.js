import React, { Component } from 'react'

export class GifList extends Component {
debugger
  makeLi = () => {
    return this.props.gifs.map(gif => {
      return <li key={gif.id}><img src={gif.images.original.url} alt={gif.title} /></li>
    })
  }
  
  render() {
    return (
      <div>
        <ul style={{listStyle: 'none'}}>
          {this.makeLi()}
        </ul>
      </div>
    )
  }
}

export default GifList