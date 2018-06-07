import React, { Component } from 'react';
import './App.css';

import Header from "./Components/Header";
import Glinks from "./Components/Glinks";

class App extends Component {

  render() {
    return (
        <React.Fragment>
          <Header />
          <Glinks />
        </React.Fragment>
    );
  }
}

export default App;
