import React, { Component } from 'react';
import { moviesMock } from '../mock/movies.mock';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  title = 'Home Page'
  state = {
    movies: null,
  }
    handleClick(id) {
      const movie = this.state.movies.find((m) => m.id === id);
      if (!!movie) {
        movie.isToggleOn = !movie.isToggleOn;
        this.setState(() => ({
          movies: this.state.movies
        }));
      }
    }
  onSave($event, movieId, property) {
    const movie = this.state.movies.find((m) => m.id === movieId);
    movie[property] = $event;
  }
  onAccept = (text) => {
    this.setState({ text })
  }
  componentDidMount() {
    this.loadMovies();
  }
  loadMovies() {
    moviesMock.forEach((movie) => movie.isToggleOn = false);
    this.setState(() => ({ movies: moviesMock }));
  }
  render() {
    return (
      <div>
        <h1> {this.title} </h1>
        {this.state.movies && this.state.movies.map(movie => <div class="movie-container">
          <div onClick={() => { this.handleClick(movie.id) }}>
            <div class="movie-Url"><img src={movie.imageUrl} alt=''></img></div>
            <div class="title">{movie.title}</div>
          </div>
          {!!movie.isToggleOn && < div >
            <div class="overview">{movie.overview}</div> 
            <div class ="genre">Genre: {movie.genre}</div>
            <div class="rating">Rating: {movie.rating}</div>
          </div>}
        </div>)
        }
      </div>
    )
  }
}
export default Home





