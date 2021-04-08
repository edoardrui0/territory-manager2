import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddAddressButton extends Component {
  render() {
    return (
      <Link to="addAddress">
        <button>Add new address</button>
      </Link>
    );
  }
}
