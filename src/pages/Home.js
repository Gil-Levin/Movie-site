import React, { Component } from 'react'
import { moviesMock } from '../mock/movies.mock'

class Home extends Component {

  title = 'Movies Page'
  state = {
    movies: null
  }

  componentDidMount() {
    this.loadMovies();
  }

  // mock async behavior
  loadMovies() {
    this.setState(() => ({ movies: moviesMock }));
  }

  render() {
    return (
      <div>
        <h1> {this.title} </h1>
        {this.state.movies && this.state.movies.map(movie => <div class="movie-container">
          <div class="movie-Url"><img src={movie.imageUrl} alt=''></img></div>
          <div class="title">{movie.title}</div>
          {/* <div class="overview">{movie.overview}</div> */}
          {/* <div class="rating">Rating: {movie.rating}</div> */}
        </div>)}
      </div>
    )
  }
}
export default Home





