import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component{
  constructor() {
    super();

    this.state = {
      stores: ["tobi", "urban outfitters", "zara", "topshop"]
    };
  }
  render() {
    let storesToDisplay = this.state.stores.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    });
    return <div className="App">{storesToDisplay}</div>
  }
}

