import React from "react";
import { Input, Select, DatePicker } from "antd";
import { Container } from "../../styles/management/mainBusAlar";
const { Option } = Select;

class PopUp extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <div className="name">
            Maintenance Company <br/>
            <Select defaultValue="select" style={{width: '100%'}}>
              <Option value="1">Testing 1</Option>
              <Option value="2">Testing 2</Option>
              <Option value="3">Testing 3</Option>
            </Select>
          </div>
          <div className="regnum">
            Equipment selection <br/>
            <Select defaultValue="select"  style={{width: '100%'}}>
              <Option value="1">Testing 1</Option>
              <Option value="2">Testing 2</Option>
              <Option value="3">Testing 3</Option>
            </Select>
          </div>
          <div className="info">
            <label className="regInfo" htmlFor="ifno">
              Maintenance date
              <DatePicker style={{width:  '100%'}} />
            </label>
          </div>
          <div className="regnum" >
            Maintenance <br/>
            <Select defaultValue="select"  style={{width: '100%'}}>
              <Option value="1">Testing 1</Option>
              <Option value="2">Testing 2</Option>
            </Select>
          </div>
          <div className="date">
            <label className="regInfo" htmlFor="name">
              Maintenance content
              <Input className="inp" placeholder="Maintenance content" />
            </label>
          </div>
          <div className="info">
            <label className="regInfo" htmlFor="ifno">
              Checker
              <Input className="inp" placeholder="Checker" />
            </label>
          </div>

          <div className="info">
            <label className="regInfo" htmlFor="ifno">
              Replacement parts
              <Input className="inp" placeholder="Replacement Parts" />
            </label>
          </div>
          <div className="info">
            <label className="regInfo" htmlFor="ifno">
              Maintenance cost
              <Input className="inp" placeholder="Maintenance cost" />
            </label>
          </div>
        </Container>
      </div>
    );
  }
}

export default PopUp;
