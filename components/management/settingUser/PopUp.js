import React from "react";
import { Input, Select } from "antd";
import { Container } from "../../styles/clientpopup";
const {Option} = Select;

class PopUp extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <div className="name">
              Account Name
              <Select defaultValue="select">
                <Option value="1">Testing 1</Option> 
                <Option value="2">Testing 2</Option> 
                <Option value="3">Testing 3</Option> 
              </Select>
              {/* <Input className="inp" value={this.props.pname} /> */}
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
        </Container>
      </div>
    );
  }
}

export default PopUp;
