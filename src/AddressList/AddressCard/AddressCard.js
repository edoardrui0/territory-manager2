import React, { Component } from "react";

export default class AddressCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address1: "123 street",
      address2: "456 street",
      address3: "789 street",
    };
  }

  render() {
    return (
      <ul>
        <li>{this.state.address1}</li>
        <li>{this.state.address2}</li>
        <li>{this.state.address3}</li>
      </ul>
    );
  }
}
