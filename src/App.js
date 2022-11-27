import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import Home from './pages/Home';
import Search from './pages/Search';
import About from './pages/About';

function App() {
  // function Toggle(){
  //   const [show,setShow] = useState(true)
  //   return (
  //     <div>
  //     {
  //       show?<h1>Hello World</h1>:null
  //     }
  //     <button onClick ={() => setShow(!show)}>Toggle</button>
  //     </div>
  //   )
  //   }
  function nav(){
    return(
    <Router>
      <div>
      <nav>
        <div>
          <div><Link to ={'/'}>Home</Link></div>
          <div><Link to ={'/search'}>Search</Link></div>
          <div><Link to ={'/about'}>About</Link></div>
        </div>
      </nav>
      <Switch>
        <Route path = "/" exact component= {Home}></Route>
        <Route path = "/about" component= {About}></Route>
        <Route path = "/search" component= {Search}></Route>
      </Switch>
      </div>
    </Router>
  );
}

  return (
      <div className="App">
         {/* <header className="App-header"> */}
         {/* {Toggle()} */}
            {nav()}
         {/* </header>  */}
      </div>
  );
}


export default App;


