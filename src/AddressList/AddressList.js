import React, { Component } from "react";
import AddAddressButton from "./AddAddressButton/AddAddressButton";
import AddressCard from "./AddressCard/AddressCard";
import AddressListPageInfo from "./AddressListPageInfo/AddressListPageInfo";

export default class AddressList extends Component {
  render() {
    return (
      <div>
        <AddressListPageInfo />
        <AddressCard />
        <AddAddressButton />
      </div>
    );
  }
}
