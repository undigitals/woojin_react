import React from "react";
// import { Chart, Axis, Geom } from "bizcharts";

class Groupedcolumn extends React.Component {
  render() {
    return (
      <div>
        <Chart width={600} height={400} data={data}>
          <Axis name="sold" />
          <Axis name="genre" visible={false} />
          <Geom type="interval" position="genre*sold" color="genre" />
        </Chart>
      </div>
    );
  }
}

export default Groupedcolumn;
