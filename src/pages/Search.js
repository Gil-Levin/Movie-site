import React, { Component } from 'react'
import { moviesMock } from '../mock/movies.mock'
export default class Contact extends Component {
        constructor(props) {
          super(props);
          this.state = {value: ''};
          this.handleChange = this.handleChange.bind(this);
        }
      
        handleChange(event) {
          this.setState({value: event.target.value});
          //console.log(event.target.value)
          for (const movie in moviesMock){
            for(const category in moviesMock[movie]){
                //console.log(moviesMock[key][genre])
                //if(event.target.value === moviesMock.genre[key])console.log(moviesMock[genre])
            }
            console.log(moviesMock[movie])
            //if(event.target.value === this.movies.moviesMock[key])console.log(this.movies.moviesMock[key])
          }
        //   if(event.target.value == )console.log("you won")
        }
        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          );
        }
      }


