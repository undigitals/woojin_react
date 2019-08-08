import React from "react";
import RegBusCharts from './chargeHy/RegBus'
import Dtable from './chargeHy/table'
import Top from './chargeHy/Top'


class Expanse extends React.Component {
  render() {
    return (
      <div>
        <Top />
        <RegBusCharts />
        <Dtable />
      </div>
    );
  }
}

export default Expanse;
      