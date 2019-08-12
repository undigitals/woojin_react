import React from "react";
import { Select, Input, Button, DatePicker, Radio } from "antd";
import { Peak } from "../../styles/management/mainResult";

const { Option } = Select;
class Top extends React.Component {
  render() {
    return (
      <Peak>
        <div className="container1">
          <div className="dt">
            <DatePicker /> to <DatePicker />
          </div>
          <div className="ds">
            <Radio.Group defaultValue="a" buttonStyle="solid">
              <Radio.Button value="a"> one day</Radio.Button>
              <Radio.Button value="b"> one week</Radio.Button>
              <Radio.Button value="c"> one month</Radio.Button>
              <Radio.Button value="d"> one year</Radio.Button>
            </Radio.Group>
          </div>
        </div>
        {/* <div className="container2">
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
        </div>*/}
        <div className="col2">
          <Button type="primary">Look up</Button>
        </div>
      </Peak>
    );
  }
}
export default Top;
