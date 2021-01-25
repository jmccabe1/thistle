import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
  <div>
  <br/>
    <br/>

    <div className="footer">
        <div className="footerName">Thistle Creek Honey Company</div>
        <div className="footerEmail"><a href="mailto:thistlecreekhoneycompany@gmail.com">Contact Us</a></div>
        <div className="footerFacebook">
            <a href="https://www.facebook.com/pages/category/Cosmetics-Store/Thistle-Creek-Honey-Company-259106467598985/">
                <img src="iconfinder_Rounded_Facebook_svg_5282541.png" alt="Facebook" className="facebookImage"></img>
            </a>
        </div>
    </div>
    </div>
  );
}