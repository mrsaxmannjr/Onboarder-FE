import React, { Component } from 'react';

class Glink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      linkName: this.props.link.linkName,
      url: this.props.link.url,
      description: this.props.link.description,
      frequency: this.props.link.frequency,
    }
  }

  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.calculateOneRM(value)
    this.setState({
      [name]: value
    })
  }

  handleToggle = (event) => {
    event.preventDefault();
    this.setState({
      edit: !this.state.edit
    })
  }

  handleEdit = (event) => {
    event.preventDefault();
    const editData = {
      linkName: this.state.linkName,
      url: this.state.url,
      description: this.state.description,
      frequency: this.state.frequency,
    }
    this.editLink(editData)
  }

  editLink = (editData) => {
    const { link } = this.props;
    if (!link.id) {throw new Error("Invalid object")}
    fetch(`http://localhost:3000/api/v1/glinks/${link.id}`, {
      method: "PUT",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(editData),
    })
      .then(response => response.json())
      .then(response => this.setState({
        edit: false
      }))
      .catch(err => console.error(err));
    this.props.updateLink(link, editData);
  }

  handleDelete = (event) => {
    event.preventDefault();
    const { link } = this.props;
    fetch(`http://localhost:3000/api/v1/glinks/${link.id}`, { method: 'DELETE' })
      .catch(err => console.error(err));
    this.props.deleteLink(link);
  }

  render() {
    const { link } = this.props
    return (
      <React.Fragment>
        <div id="accordion">
          <div className="card border-primary mb-3">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" data-toggle="collapse" data-target={`#${link.linkName}`} aria-expanded="false" aria-controls="collapseThree">
                  {link.linkName}
                </button>
              </h5>
            </div>
            <div id={link.linkName} className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div className="card-body ">
              <h5 class="card-title text-primary">{link.linkName}</h5>
              <p className="card-text">{link.description}</p>
              <p className="card-text">Frequency: {link.frequency}</p>
                <a href={`${link.url}`} target="_blank" className="btn btn-primary mr-md-5" role="button">Go to Link</a>
                <button className="btn btn-info ml-md-5" onClick={this.handleToggle}>Edit Link</button>
                <button className="btn btn-danger ml-md-3" onClick={this.handleDelete}>Delete Link</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Glink;