import React from 'react';
import Home from './Home.js';
import Login from './Login.js';
import Signup from './Signup.js';


import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import NavBar from './NavBar.js';
// import pixxx from'./pixxx.jpg';
import './App.css'


function App() {
  return (
    <div className="home" >
    
    <div>
      <h1 style={{textAlign:"center", fontFamily:"Monotype Corsiva ,times new romans, sans serif", fontSize:"90px"}}> WeatherApp</h1>
    
      
      <div className='navlink'>
      
        <Router>
          <NavBar />
          <Switch>
            <Route exact path ='/' component={Home}/>
            <Route path ='/Login' component= {Login} />
            <Route path ='/Signup' component ={Signup} />
          </Switch>
        </Router>
      </div>
      <br></br>
      <br></br>
      
      
    </div>
    </div>
  )
}

export default App

