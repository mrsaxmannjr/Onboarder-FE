import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">Galvanize Onboarder</a>
    </nav>
  </React.Fragment>
    );
  }
}

export default Header;
