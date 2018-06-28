import React, { Component } from 'react';
import Form from "../Form";
import Glink from "../Glink";

class Glinks extends Component {
  state = {
    isLoaded: false,
    links: JSON.parse(window.localStorage.gOnboarderLinks || '[]'),
    search: ""
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = () => {
    return fetch("https://onboarder-backend.herokuapp.com/api/v1/glinks")
      .then(response => response.json())
      .then(links => {
        this.setState({
          isLoaded: true,
          links: links,
        })
        window.localStorage.gOnboarderLinks = JSON.stringify(links)
      })
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  getFormData = () => {
    this.getData()
  }

  deleteLink = (link) => {
    const links = this.state.links.slice();
    const index = links.indexOf(link);
    links.splice(index, 1);
    this.setState({
      links: links
    })
  }

  updateLink = (link, editData) => {
    const links = this.state.links.slice();
    const index = this.state.links.indexOf(link);
    links.splice(index, 1, editData)
    this.setState({
      links: links
    })
  }

  render() {
    console.log("State", this.state.links);
    let { isLoaded, links, search } = this.state
    search = search || "";
    const filteredLinks = links.filter(link => link && link.linkName.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    return (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">Galvanize Onboarder</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#"><span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input onChange={this.handleChange} value={this.state.search} name="search" className="form-control mr-sm-2" type="text" placeholder="Search for Links" />
            </form>
          </div>
        </nav>
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Welcome to Galvanize Onboarder!</h1>
            <p className="lead">Below, you will find links to various Google docs, Github repos and Galvanize Apps.  These tools are vital to your success as a Galvanize Instructor.  Feel free to add, edit or delete links as needed.   </p>
          </div>
        </div>
        <Form getFormData={this.getFormData} />
          {!isLoaded ? <h4>Loading gLinks (waiting for Heroku to wake up). . .</h4> : filteredLinks.map(link => <Glink key={link.id} link={link} link={link} deleteLink={this.deleteLink} updateLink={this.updateLink} />)}
        </div>
    </React.Fragment>  
    );
  }
}

export default Glinks;