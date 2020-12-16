import React,{ Component } from 'react'

class Favmovies extends Component{
  render(){
    console.log('Props',this.props)
    return(
      <div>
      {this.props.movies.map((movie) => (<li>{movie.name}</li>))}
      </div>
    )
  }
}

export default Favmovies;