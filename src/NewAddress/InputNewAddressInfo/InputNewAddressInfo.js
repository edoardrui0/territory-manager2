import React, { Component } from "react";

export default class NewAddressInfoCard extends Component {
  render() {
    return (
      <div>
        <form>
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
        </form>
      </div>
    );
  }
}
