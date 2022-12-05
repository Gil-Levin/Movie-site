import React, { Component } from 'react';
import { moviesMock } from '../mock/movies.mock';
import EdiText from 'react-editext';

const EMPTY_NEW_MOVIE = {
  title: '',
  overview: '',
  rating: 0,
  genre: ''
}
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      filterBy: '',
      newMovie: EMPTY_NEW_MOVIE,
      isAddingOn: false
    };

    this.title = "Search & Edit Page";
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCreateMovie = this.handleCreateMovie.bind(this);
    this.handleAdding = this.handleAdding.bind(this);
    this.handleNewMovieFormChange = this.handleNewMovieFormChange.bind(this);
  }
  componentDidMount() {
    this.loadMovies();
  }
  loadMovies() {
    this.setState(() => ({ movies: moviesMock }));
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
  handleChange(event) {
    this.setState({ filterBy: event.target.value })
  }
  onSave($event, movieId, property) {
    const movie = this.state.movies.find((m) => m.id === movieId);
    movie[property] = $event;
  }
  handleDelete(id) {
    const movies = this.state.movies.filter(x => x.id !== id);
    if (!!movies) {
      this.setState(() => ({ movies }));
    }
  }
  getMoviesForDisplay() {
    return this.state.movies.filter(i => i.genre.toLowerCase().includes(this.state.filterBy) || i.title.toLowerCase().includes(this.state.filterBy));
  }
  handleCreateMovie(event) {
    event.preventDefault()
    const newMovieCopy = { ...this.state.newMovie, id: Math.floor(Math.random() * 1000) };
    newMovieCopy.imageUrl = "https://placeimg.com/185/104/animals?param=" + newMovieCopy.id;
    this.setState((prevState) => ({ movies: [...prevState.movies, newMovieCopy] }));
    this.setState({ newMovie: EMPTY_NEW_MOVIE });
  }

  handleAdding() {
    this.setState({ isAddingOn: !this.state.isAddingOn })
  }
  handleNewMovieFormChange(event) {
    this.setState(prevState => ({ newMovie: { ...prevState.newMovie, [event.target.name]: event.target.value } }), () => {
    });
  }
  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <button onClick={this.handleAdding}>Add</button>
        {!!this.state.isAddingOn && <div>
          <label htmlFor="title">Title:</label>
          <input onChange={this.handleNewMovieFormChange} value={this.state.newMovie.title} type="text" name="title" />
          <label htmlFor="overview">Overview:</label>
          <input onChange={this.handleNewMovieFormChange} value={this.state.newMovie.overview} type="text" name="overview" />
          <label htmlFor="rating">Rating:</label>
          <input onChange={this.handleNewMovieFormChange} value={this.state.newMovie.rating} type="number" name="rating"/>
          <label htmlFor="genre">Genre:</label>
          <input onChange={this.handleNewMovieFormChange} value={this.state.newMovie.genre} type="text" name="genre" />
          <button onClick={this.handleCreateMovie}>Save movie</button>
          {/* <img src="https://placeimg.com/185/104/animals" alt="poster" /> */}
        </div>}
        <form>
          <label>
            Filter by Genre or Title:
            <input type="text" onChange={this.handleChange} />
          </label>
        </form>
        {this.state.movies && this.getMoviesForDisplay().map(movie => <div class="movie-container">
          <div onClick={() => { this.handleClick(movie.id) }}>
            <div class="movie-Url"><img src={movie.imageUrl} alt=''></img></div>
            {!movie.isToggleOn && <div>
              <div class="title">{movie.title}</div>
            </div>}
          </div>
          <button onClick={() => { this.handleDelete(movie.id) }}>Delete</button>
          {!!movie.isToggleOn && < div >
            <EdiText
              type='text'
              value={movie.title}
              onSave={($event) => this.onSave($event, movie.id, 'title')}
            />
            <EdiText
              type='text'
              value={movie.genre}
              onSave={($event) => this.onSave($event, movie.id, 'genre')}
            />
            <EdiText
              type='text'
              value={movie.overview}
              onSave={($event) => this.onSave($event, movie.id, 'overview')}
            />
            <EdiText
              type="number"
              value={movie.rating}
              onSave={($event) => this.onSave($event, movie.id, 'rating')}
            />
          </div>}
        </div>)
        }
      </div>

    );
  }
}
export default Contact


