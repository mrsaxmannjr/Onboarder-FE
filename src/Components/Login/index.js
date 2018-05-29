import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
  this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log("data: ", data);
    // fetch("//localhost:3002/api/v1/auth/login", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json"
    //   },
    //   body: JSON.stringify(data)
    // }).then(res => res.json()).then(user => console.log(user))

    this.setState({
      username: "",
      password: "",
    });
  }

  render() {
    return (
      <div>
        <div id="header-background">
          <p id="placeholder">placeholder</p>
        </div>
        <span>

        </span>
        <div>
          <h1>Welcome to the Onboarder!</h1>

          <form method="post" encType="text/plain" onSubmit={this.handleSubmit}>
            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
            <button type="submit" id="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
