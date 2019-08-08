import React from "react";
import DataSet from "@antv/data-set";
import {Container} from '../styles/Chart'
import {bardata} from '../../mock/chartdata'

let bizcharts;
if (process.browser) {
  bizcharts = require("bizcharts");
}
const ds = new DataSet();
const dv = ds.createView().source(bardata);
dv.transform({
  type: "fold",
  fields: ["Low", "Modirate", "High", "Very High"],
  key: "k",
  value: "v" 
});


class Groupedcolumn extends React.Component {
  render() {
    return (
      <Container>
        {process.browser && 
        <bizcharts.Chart  height={400} data={dv}  forceFit >
          <bizcharts.Axis name="k"  />
          <bizcharts.Axis name="v"  />
          <bizcharts.Legend position='top' type="bar"/>
          <bizcharts.Tooltip />
          <bizcharts.Geom type="interval" position="k*v" color="name" adjust={[{ type: "dodge", marginRatio: 1/32}]}/>
        </bizcharts.Chart>
        }
      </Container>
    );
  }
}

export default Groupedcolumn;