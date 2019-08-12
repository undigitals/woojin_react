import React from "react";
import { Input, Select } from "antd";
import { Container } from "../../styles/management/RegBus";
const { Option } = Select;

class PopUp extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <div className="name">
            Account Name <br/>
            <Select defaultValue="select" style={{width: '100%'}}>
              <Option value="1">Testing 1</Option>
              <Option value="2">Testing 2</Option>
              <Option value="3">Testing 3</Option>
            </Select>
          </div>
          <div className="regnum">
            Route Number <br/>
            <Select defaultValue="select"  style={{width: '100%'}}>
              <Option value="1">Testing 1</Option>
              <Option value="2">Testing 2</Option>
              <Option value="3">Testing 3</Option>
            </Select>
          </div>
          <div className="regnum" >
            Card Number <br/>
            <Select defaultValue="select"  style={{width: '100%'}}>
              <Option value="1">Testing 1</Option>
              <Option value="2">Testing 2</Option>
              <Option value="3">Testing 3</Option>
            </Select>
          </div>
          <div className="date">
            <label className="regInfo" htmlFor="name">
              BMS
              <Input className="inp" placeholder="BMS" />
            </label>
          </div>
          <div className="info">
            <label className="regInfo" htmlFor="ifno">
              The Car's Number
              <Input className="inp" placeholder="the cars number" />
            </label>
          </div>
        </Container>
      </div>
    );
  }
}

export default PopUp;
