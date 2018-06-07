import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkName: "",
      url: "",
      description: "",
      frequency: "",
    };
  }

  isValidEntry = () => {
    const { linkName, url, description, frequency } = this.state
    return linkName && url && description && frequency
  }

  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
    console.log("HCstate", this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      linkName: this.state.linkName,
      url: this.state.url,
      description: this.state.description,
      frequency: this.state.frequency,
    }
    console.log("formData",formData);
    this.postNewLink(formData)
    this.setState({
      linkName: "",
      url: "",
      description: "",
      frequency: "",
    })
  }

  postNewLink = (formData) => {
    fetch("http://localhost:3000/api/v1/glinks/", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(response => this.props.getFormData(response))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <React.Fragment>
        <div id="accordion">
          <div className="card border-primary mb-3">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#new-link" aria-expanded="false" aria-controls="collapseThree">
                  Create a New Link
                </button>
              </h5>
            </div>
            <div id="new-link" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                  <label for="linkName">Link Name</label>
                  <input type="text" className="form-control" placeholder="Link Name" name="linkName" value={this.state.linkName} onChange={this.handleChange} />
                  </div>

                <div className="form-group">
                  <label for="description">Link Description</label>
                    <textarea type="text" className="form-control" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange} />
                  </div>

                <div className="form-group">
                  <label for="frequency">Frequency of Use</label>
                    <input type="text" className="form-control" placeholder="Frequency" name="frequency" value={this.state.frequency} onChange={this.handleChange} />
                  </div>

                <div className="form-group">
                  <label for="url">Link URL</label>
                  <input type="text" className="form-control" placeholder="URL" name="url" value={this.state.url} onChange={this.handleChange} />
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary" disabled={!this.isValidEntry()} >Create New Link</button>
                  </div>

                </form>
              </div>

            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
};

export default Form;