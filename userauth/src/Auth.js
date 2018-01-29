import React, { Component } from "react";
import Login from "./components/LoginOut";
import "./index.css";

class Auth extends Component {
  render() {
    return (
      <main className="--center">
        <Login />
      </main>
    );
  }
}

export default Auth;