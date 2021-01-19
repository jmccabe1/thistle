import logo from './logo.svg';
import './App.css';
import HeaderComponent from './HeaderComponent.js';
import BodyComponent from './BodyComponent.js';
import FooterComponent from './FooterComponent.js';
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

function App() {
  return (
  <div>
    <HeaderComponent>
    </HeaderComponent>
    <BodyComponent>
    </BodyComponent>
    <FooterComponent>
    </FooterComponent>
    </div>
  );
}

export default App;
