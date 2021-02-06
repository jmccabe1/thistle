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
import Home from "./Home";


export default function App() {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
      <div className="HeaderMain">
      <div className="HeaderImage">
        <Link to="/">
            <img src="thistle_transparent_background.png" alt="Thistle" width="100" height="150"></img>
        </Link>
      </div>
         <div className="HeaderLinks">
            <div className="LinkBar">
                <div className="clickableLinks"><Link to="/">Home</Link></div>
                                <div className="clickableLinks"><Link to="/About">About Us</Link></div>
                <div className="clickableLinks"><Link to="/Products">Our Products</Link></div>
                <div className="clickableLinks"><Link to="/Tips">Tips</Link></div>
                <div className="clickableLinks"><Link to="/Contact">Contact Us</Link></div>
            </div>
            <div className="HeaderTitle">
                Thistle Creek Honey Company
            </div>
         </div>
      </div>
      </header>
      <Route component={Products} path="/Products" />
        <Route component={About} path="/About" />
                                  <Route component={Contact} path="/Contact" />
                                  <Route component={Tips} path="/Tips" />
                                  <Route component={Home} exact path="/" />
    </div>
    </Router>
  );
}

