import React, { Component } from 'react';
import Form from "../Form";
import Glink from "../Glink";

class Glinks extends Component {
  state = {
    isLoaded: false,
    links: [],
  }

  componentDidMount = () => {
    fetch("https://onboarder-backend.herokuapp.com/api/v1/glinks")
      .then(response => response.json())
      .then(links => this.setState({
        isLoaded: true,
        links: links,
      }))
  }

  getFormData = (formData) => {
    const newFormData = this.state.links;
    newFormData.push(formData)
    this.setState({
      links: newFormData,
    })
    this.componentDidMount()
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
    const { isLoaded, links } = this.state
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Welcome to Galvanize Onboarder!</h1>
            <p className="lead">Below, you will find links to various Google docs, Github repos and Galvanize Apps.  These tools are vital to your success as a Galvanize Instructor.  Feel free to add, edit or delete links as needed.   </p>
          </div>
        </div>
        <Form getFormData={this.getFormData} />
        {!isLoaded ? <h4>Loading gLinks (waiting for Heroku to wake up). . .</h4> : links.map(link => <Glink key={link.id} link={link} key={link.id} link={link} deleteLink={this.deleteLink} updateLink={this.updateLink} />)}
      </div>
    );
  }
}

export default Glinks;