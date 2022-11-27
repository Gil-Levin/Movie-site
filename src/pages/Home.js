import React, { Component } from 'react'
import { moviesMock } from '../mock/movies.mock'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }
  title = 'Movies Page'
  state = {
    movies: null
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
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
        {/* {this.state.isToggleOn ? 'ON' : 'OFF'} */}
        <h1> {this.title} </h1>
        {this.state.movies && this.state.movies.map(movie => <div onClick={this.handleClick} class="movie-container">
          <div class="movie-Url"><img src={movie.imageUrl} alt=''></img></div>
          <div class="title">{movie.title}</div>
          {!!this.state.isToggleOn && < div >
            <div class="overview">{movie.overview}</div>
            <div class="rating">Rating: {movie.rating}</div>
          </div>}
        </div>)
        }
      </div>
    )
  }
}
export default Home





