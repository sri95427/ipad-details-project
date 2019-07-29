import React from "react";

//import logo from "../images/logo.png";

class RegisterLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
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

    this.setState({
      datas: datas
    });

    let data = {
      username,
      password
    };
    datas.push(data);
    console.log(data.username);

    if (data.username === "admin" && data.password === "admin") {
      alert("Welcome");
    } else {
      alert("Please check your details");
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <div className="reg-login">Login</div>
        <form onSubmit={this.handleSubmit} name="./myForm" action="Form.js">
          <div class="imgcontainer">
           // <img src={logo} alt="Avatar" class="avatar" />
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
export default RegisterLogin;
