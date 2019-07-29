import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import "./style.css";
//import Header from "./component/Header";
//import Footer from "./component/Footer";
//import App from "./component/App";

import Register from "./component/Register";
import LogIn from "./component/LogIn";
import Form from "./component/Form";
import IpadDetails from "./component/IpadDetails";
import SelectBox from "./component/SelectBox";
import 'bootstrap/dist/css/bootstrap.css';

/*function Main() {
  return (
    <div className="Main">
      <Header />
      <Form />
      <RegisterLogin />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement); */

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
        <li>
          <Link to="/LogIn">LogIn</Link>
        </li>
        <li>
          <Link to="/Form">Form</Link>
        </li>
        <li>
          <Link to="/IpadDetails">IPAD Form</Link>
        </li>
        <li>
          <Link to="/SelectBox">Dynamic SelectBox</Link>
        </li>
      </ul>
    </div>
    <Route path="/Register" component={Register} />
    <Route path="/LogIn" component={LogIn} />
    <Route path="/Form" component={Form} />
    <Route path="/IpadDetails" component={IpadDetails} />
    <Route path="/SelectBox" component={SelectBox} />
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
