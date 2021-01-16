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
    <div className="footer">
        <div className="footerEmail"><a href="mailto:thistlecreekhoneycompany@gmail.com">Contact Us</a></div>
        <div className="footerName">Thistle Creek Honey Company</div>
        <div className="footerFacebook">
            <a href="https://www.google.com/">
                <img src="iconfinder_Rounded_Facebook_svg_5282541.png" alt="Facebook" className="facebookImage"></img>
            </a>
        </div>
    </div>
  );
}