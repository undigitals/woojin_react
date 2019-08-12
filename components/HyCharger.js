import React, { Component } from "react";
import ChargerData from "./chargeHy/ChargerChargeHy";
import Dtable from "./chargeHy/table";
import Top from "./chargeHy/Top";

class ChargerHy extends Component {
  render() {
    return (
      <div>
        <Top />
        <ChargerData />
        <Dtable />
      </div>
    );
  }
}
export default ChargerHy;
