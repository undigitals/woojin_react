import React from "react";
import { Input } from "antd";
import { Container } from "../../styles/clientpopup";

class RegPop extends React.Component {
  render() {
    return (
      <div>
        <Container>
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
        </Container>
      </div>
    );
  }
}

export default RegPop;
