import React from "react";
import ReactDOM from "react-dom";
import DataSet from "@antv/data-set";
import {Container} from '../styles/LineChart'
import {linedata} from '../../demos/mock/chartdata'
import  styled from 'styled-components'
let bizcharts;
if (process.browser) {
  bizcharts = require("bizcharts");
}

class Groupedcolumn extends React.Component {
  render() {
    const cols = {

        year: {
          // range: [0, 1]
        }
      };
    return (
      <Container>
        {process.browser && 
        <bizcharts.Chart  height={400} data={linedata} scale={cols}  forceFit >
          <bizcharts.Axis name="year"  />
          <bizcharts.Axis name="value"  />
          <bizcharts.Legend position='top' type="bar"/>
          <bizcharts.Tooltip />
          <bizcharts.Geom
            type="line"
            position="year*value"
            size={2}
            color={"city"}
            shape={"smooth"}
          />
          <bizcharts.Geom
            type="point"
            position="year*value"
            size={4}
            shape={"circle"}
            color={"city"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </bizcharts.Chart>
        }
      </Container>
    );
  }
}

export default Groupedcolumn;
