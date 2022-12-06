import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import Home from './pages/Home';
import Search from './pages/Search';
import About from './pages/About';

function App() {
  function nav(){
    return(
    <Router>
      <div>
      <nav>
        <div>
          <div><Link to ={'/'}>Home</Link></div>
          <div><Link to ={'/searchAndEdit'}>Search and Edit</Link></div>
          <div><Link to ={'/about'}>About</Link></div>
        </div>
      </nav>
      <Switch>
        <Route path = "/" exact component= {Home}></Route>
        <Route path = "/about" component= {About}></Route>
        <Route path = "/searchAndEdit" component= {Search}></Route>
      </Switch>
      </div>
    </Router>
  );
}

  return (
      <div className="App">
            {nav()}
      </div>
  );
}


export default App;


