import React, { Component } from 'react';
import { moviesMock } from '../mock/movies.mock';
import EdiText from 'react-editext';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: null, filterBy: ''};
    this.title = "Search & Edit Page";
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
   // this.handleCreateMovie = this.handleCreateMovie(this)
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
  
  handleCreateMovie(id,title,overview,rating,genre){ 
    const movie = {
      id:id,
      title:title,
      overview:overview,
      rating:rating,
      genre:genre
    }
    movie.isAddingOn = !movie.isAddingOn
     this.state.movies.push(movie)
    // this.setState(() => ({movies}))
  }
  render() {
    return (
      <div>
        <h1>{this.title}</h1>
       <button>Add</button> 
        <form>
          <label>
            Filter by Genre or Title:
            <input type = "text" onChange={this.handleChange} />
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


