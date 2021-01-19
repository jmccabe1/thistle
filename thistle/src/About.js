import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BodyComponent from './BodyComponent.js';

export default function About() {
    return (
    <div className="MainContent">
    <div className="AboutText">
        <h2>It started as a beekeeping hobby and a quest for skin care products that are better for you and the environment.<br/>
            <br/>
            It ended with jars of honey and a suite of bath products that we far prefer to anything we can find in a store.</h2>
    </div>
    <div className="AboutImage">
        <img src="smoker.jpg"></img>
    </div>
    </div>

    )
};