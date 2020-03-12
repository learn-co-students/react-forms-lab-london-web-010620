import React from "react";

class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""

  };

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  checkFieldsContent(e) {
    e.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.handleLogin()
    } else {
      return
    }

  }


  render() {
    return (
      <form onSubmit={e => this.checkFieldsContent(e)}>
        <div>
          <label>
            Username
            <input onChange={e => this.handleUsernameChange(e)} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={e => this.handlePasswordChange(e)} id="password" name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
