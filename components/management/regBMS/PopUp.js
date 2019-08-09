import React from "react";
import { Input } from "antd";
import { Container } from "../../styles/RegBMS";

class BatteryPopUp extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <div className="name" >
            <label style={{paddingBottom: '50'}} className="regInfo" >
              Company name
              <Input className="inp" value={this.props.pname} />
            </label>
          </div>
        </Container>
      </div>
    );
  }
}

export default BatteryPopUp;
