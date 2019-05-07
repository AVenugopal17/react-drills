import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      stores: ["tobi", "urban outfitters", "zara", "topshop"]
    };
  }
  handleChanger(filter){
    this.setState({filterString: filter});
  }
  render() {
    let storesToDisplay = this.state.stores
      .filter((element, index) => {
        return element.includes(this.state.filterString);
      })
      .map((element, index) => {
        return<h2 key={index}>
        {element}</h2>;
      });
    return (
      <div className="App">
        <input onChange={e => this.handleChanger(e.target.value)} 
        type="text" />
        {storesToDisplay}
      </div>
    );
  }
}
