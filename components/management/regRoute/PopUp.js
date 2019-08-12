import React from "react";
import { Input } from "antd";
import { ContainerPop } from "../../styles/management/regRoute";

class RegPop extends React.Component {
  render() {
    return (
      <div>
        <ContainerPop>
          <div className="name">
            <label className="regInfo" htmlFor="name">
              Customer name
              <Input className="inp" value={this.props.rname} placeholder="Customer name" />
            </label>
          </div>
          <div className="regnum">
            <label className="regInfo" htmlFor="name">
              Route number
              <Input
                placeholder="Route Number "
                value={this.props.pnumber}
              />
            </label>
          </div>
          <div className="regnum">
            <label className="regInfo" value={this.props.pmobile}>
              Route name
              <Input className="inp" placeholder="Route name" />
            </label>
          </div>
        </ContainerPop>
      </div>
    );
  }
}

export default RegPop;
