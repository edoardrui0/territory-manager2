import React, { Component } from "react";

export default class NewAddressInfoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addressInfo: {
        streetNum: "1876 SW 13th Street",
        aptNum: "5",
        cityName: "Miami",
        stateName: "FL",
        zipNum: "33145",
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert(JSON.stringify(this.state.addressInfo));
    console.log(this.state.addressInfo);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Street Address
            <input type="text" name="streetNum" />
          </label>

          <label>
            Apartment / Suite / Other
            <input type="text" name="aptNum" />
          </label>

          <label>
            City
            <input type="text" name="cityName" />
          </label>

          <label>
            State
            <input type="text" name="stateName" />
          </label>

          <label>
            Zip Code
            <input type="text" name="zipNum" />
          </label>

          <input type="submit" value="Submit" name="submitNewAddressCard" />
        </form>
      </div>
    );
  }
}
