import React from "react";
import { Select, Input, Button } from "antd";
import { ContainerTop } from '../../styles/management/regClient';

const { Option } = Select;
class Top extends React.Component {
  render() {
    return (
      <ContainerTop>
        <div>
          <label htmlFor="">
            company
            <Select className="inp" defaultValue="select">
              <Option value="1"> Test </Option>
              <Option value="2"> Test 2</Option>
              <Option value="3"> Test 3</Option>
            </Select>
          </label>
        </div>
        <div>
          <label htmlFor="">
            Company Name
            <Input
              className="inp"
              placeholder="search txt"
              style={{ width: 200 }}
            />
          </label>
        </div>
        <div className="cr-btn" style={{ justifyContent: "end" }}>
          <Button className="inp btn" type="primary">
            Check
          </Button>
        </div>
      </ContainerTop>
    );
  }
}
export default Top;
