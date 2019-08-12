import React from "react";
import { Input } from "antd";
import { ContainerPop } from "../../styles/management/regClient";

class RegPop extends React.Component {
  render() {
    return (
      <div>
        <ContainerPop>
          <div className="name">
            <label className="regInfo" htmlFor="name">
              Company name
              <Input className="inp" value={this.props.pname} />
            </label>
          </div>
          <div className="regnum">
            <label className="regInfo" htmlFor="name">
              Business Number
              <Input
                placeholder="Business Number "
                value={this.props.pnumber}
              />
            </label>
          </div>
          <div className="regnum">
            <label className="regInfo" value={this.props.pmobile}>
              Mobile Number
              <Input className="inp" placeholder="Mobile Number" />
            </label>
          </div>
          <div className="date">
            <label className="regInfo" htmlFor="name">
              Address
              <Input
                className="inp"
                placeholder="Adress"
                value={this.props.padress}
              />
            </label>
          </div>
          <div className="info">
            <label className="regInfo" htmlFor="ifno">
              More Info More Info
              <Input
                className="inp"
                placeholder="info"
                value={this.props.pinfo}
              />
            </label>
          </div>
        </ContainerPop>
      </div>
    );
  }
}

export default RegPop;
