import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props) {
      super(props)

      this.state = {
          title: 'Search Page'                 
      }
  }

  render() {
      return (
          <div>
              <h1> {this.state.title }</h1>
              <div class = "contact-us-container">
                <form>
                    <div>Enter your favorite movie:
                        <input type="text" />
                    </div>
                    <div>
                    or
                    <br></br>
                    </div>
                    <div>Enter your favorite genre:
                        <input type="text" />
                    </div>
                </form>
              </div> 
          </div>
      )
  }
}


