import React, { Component } from 'react'

class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: 'About Page'            
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h1>About this project:</h1>
                <p>So firstly thank you for the oppertunity to send this a little later, i was struggeling with react from the beggining since i got a job in QA Automation,i used google for everything i wrote here because i didnt have enough time to go through all the react js tapes.
                anyway this is just a simple site about movies that i generate from my json file, it has a homme page where you can just look at them with toggling the overview,genre and rating. the next page is serch and edit page, where you can serach for your favorite movie by name or genre, edit its description and rating or delete this movie all together but you can also add a movie of your own </p>
            </div>
        )
    }
}

export default About





// const Edit = () => {
//     return <h1>Blog Articles</h1>;
//   };
  
//   export default Edit;