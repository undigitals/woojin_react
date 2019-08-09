import React from "react";
import { Select, Input, Button } from "antd";
import { Peak } from "../../styles/RegBus";

const { Option } = Select;
class Top extends React.Component {
  render() {
    return (
      <Peak >
        <div className="container">
          <div className="col1">
            Battery
            <Select defaultValue="select" style={{ width: "170px" }}>
              <Option value="1"> Test 1</Option>
              <Option value="2"> Test 2</Option>
              <Option value="3"> Test 3</Option>
              <Option value="4"> Test 4</Option>
            </Select>
          </div>
          <div className="col2">
            Route
            <Select defaultValue="select" style={{ width: "170px" }}>
              <Option value="1"> Test 1</Option>
              <Option value="2"> Test 2</Option>
              <Option value="3"> Test 3</Option>
              <Option value="4"> Test 4</Option>
            </Select>
          </div>
          <div className="col1">
            Car's number
            <Select defaultValue="select" style={{ width: "170px" }}>
              <Option value="1"> Test 1</Option>
              <Option value="2"> Test 2</Option>
              <Option value="3"> Test 3</Option>
              <Option value="4"> Test 4</Option>
            </Select>
          </div>
        </div>
        <div className="col2">
          <Button type="primary">Check</Button>
        </div>
      </Peak>
    );
  }
}
export default Top;
