import React, { Component } from 'react';
import { moviesMock } from '../mock/movies.mock';
import EdiText from 'react-editext'

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  title = 'Movies Page'
  state = {
    movies: null,
    text: 'edit me'
  }

  onSave($event, movieId, property) {
    const movie = this.state.movies.find((m) => m.id === movieId);
    movie[property] = $event;
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
          {/* <EdiText
        type='text'
        value={movie.overview}
        onSave={this.onSave}
      /> */}
          {!!movie.isToggleOn && < div >
            {/* <div class="overview">{movie.overview}</div> */}
            {/* <div class="rating">Rating: {movie.rating}</div> */}
            <div>GENRE</div>
            <EdiText
              type='text'
              value={movie.genre}
              onSave={($event) => this.onSave($event, movie.id, 'genre')}
            />
            <div>OVERVIEW</div>
            <EdiText
              type='text'
              value={movie.overview}
              onSave={($event) => this.onSave($event, movie.id, 'overview')}
            />
            <div>RATING</div>

            <EdiText
              type='text'
              value={movie.rating}
              onSave={($event) => this.onSave($event, movie.id, 'rating')}
            />
          </div>}
        </div>)
        }
      </div>
    )
  }
}
export default Home





