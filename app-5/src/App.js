import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";
import blueRose from './bluerose.jpeg';
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={blueRose} />
      </div>
    );
  }
}


