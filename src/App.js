import React, { Component } from 'react';
import './App.css';

import Header from "./Components/Header";
import Glinks from "./Components/Glinks";

import links from "./lib/staticData";

class App extends Component {
  state = {
    links: links,
  }

  render() {
    console.log("state", this.state);
    const { links } = this.state;
    return (
        <React.Fragment>
          <Header />
          <div className="container" >
          {links.map(link => <Glinks key={link.id} link={link} />)}
          </div>
        </React.Fragment>
    );
  }
}

export default App;
