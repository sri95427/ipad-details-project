import React from "react";

//import logo from "../images/logo.png";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      datas: [],
      act: 0
    };
  }

  handleUsernameChange = event => {
    const target = event.target.value;
    this.setState({
      username: target
    });
  };
  handleEmailChange = event => {
    const target = event.target.value;
    this.setState({
      email: target
    });
  };
  handlePasswordChange = event => {
    const target = event.target.value;
    this.setState({
      password: target
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    let datas = this.state.datas;
    let username = this.state.username;
    let password = this.state.password;
    let email = this.state.email;

    this.setState({
      datas: datas
    });

    let data = {
      username,
      password,
      email
    };
    datas.push(data);
    console.log(data.username);

    if (
      data.username !== null &&
      data.email !== null &&
      data.password !== null
    ) {
      alert("Successfully Registered");
    } else {
      alert("Please enter valid details");
    }
  };

  render() {
    const { username, password, email } = this.state;
    return (
      <div>
        <div className="reg-login">User Registration</div>
        <form onSubmit={this.handleSubmit} name="./myForm" action="Form.js">
          <div class="imgcontainer">
            //<img src={logo} alt="Avatar" class="avatar" />
          </div>
          <div className="container">
            <div>
              <label>User Name</label>
              <input
                // autoFocus
                type="text"
                value={username}
                onChange={this.handleUsernameChange}
              />
            </div>
            <div>
              <label>Email ID</label>
              <input
                // autoFocus
                type="text"
                value={email}
                onChange={this.handleEmailChange}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="text"
                value={password}
                onChange={this.handlePasswordChange}
              />
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
export default Register;
