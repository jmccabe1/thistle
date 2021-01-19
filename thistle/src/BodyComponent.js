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
<div className="AppBody">
        <Route component={Products} path="/Products" />
                                    <Route component={About} path="/About" />
                                    <Route component={Contact} path="/Contact" />
                                    <Route component={Tips} path="/Tips" />
    </div>
    </Router>
    );
};