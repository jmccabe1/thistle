import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Tips from "./Tips";


export default function App() {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
         <div className="HeaderLinks">
         <div className="HeaderImage"><img src="http://thistlecreekhoneycompany.appspot.com/Images/BannerThistle.jpg" alt="Thistle" width="100" height="150"></img></div>
         <div className="LinkBar">
            <div className="clickableLinks"><Link to="/">Home</Link></div>
            <div className="clickableLinks"><Link to="/About">About Us</Link></div>
            <div className="clickableLinks"><Link to="/Products">Our Products</Link></div>
            <div className="clickableLinks"><Link to="/Tips">Tips</Link></div>
            <div className="clickableLinks"><Link to="/Contact">Contact Us</Link></div>
         </div>
        </div>
           <h1>Welcome</h1>
        <Route component={Products} path="/Products" />
                            <Route component={About} path="/About" />
                            <Route component={Contact} path="/Contact" />
                            <Route component={Tips} path="/Tips" />
      </header>
    </div>
    </Router>
  );
}

