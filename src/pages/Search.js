import React, { Component } from 'react'
import { moviesMock } from '../mock/movies.mock';

export default class Contact extends Component {
  constructor(props) {
    super(props);
          this.state = {value: ''};
      
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
        
         handleChange(event) {
           this.setState({value: event.target.value});
          }
         
         handleSubmit(event) {
           console.log('The genre that was submitted is: ' + this.state.value);
           const genreArr= moviesMock.map(key => key.genre);
            for(let i = 0; i< genreArr.length;i++){
                if(genreArr[i] === this.state.value)console.log(genreArr[i])
                console.log(genreArr[i])
             }
           event.preventDefault();
         }
      
        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Genre:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          );
        }
      }


