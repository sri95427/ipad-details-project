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
      <div className="container">
      <div className="row ">
        <div className="reg-login col-lg-12">User Registration</div>
       </div> 
       <div className="row justify-content-center align-items-center"> 
        <form onSubmit={this.handleSubmit} name="./myForm" action="Form.js" className=" col-md-4 col-xs-3  justify-content-center align-items-center">
          <div class="imgcontainer">
            <img src="https://user-images.githubusercontent.com/26623276/62054859-0eef7e80-b238-11e9-9f6a-1b08ca479709.png" alt="Avatar" class="avatar" />
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
       </div>
     
    );
  }
}
export default Register;
