import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Login from "./Components/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/Login" component={Login} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
