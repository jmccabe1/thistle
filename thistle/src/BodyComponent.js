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
    <div className="AppBody">
        <div>
            <h2>Welcome to Thistle Creek Honey Company</h2>
        </div>
    </div>
    );
};