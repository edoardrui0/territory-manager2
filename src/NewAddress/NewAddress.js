import React, { Component } from "react";
import NewAddressInfoCard from "./InputNewAddressInfo/InputNewAddressInfo";
import NewAddressPageInfo from "./NewAddressPageInfo/NewAddressPageInfo";
import SubmitNewAddressButton from "./SubmitNewAddressButton/SubmitNewAddressButton";

export default class NewAddress extends Component {
  render() {
    return (
      <div>
        <NewAddressPageInfo />
        <NewAddressInfoCard />
        <SubmitNewAddressButton />
      </div>
    );
  }
}
