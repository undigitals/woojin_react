import React from "react";
import { Input } from "antd";
import { ContainerPop } from "../../styles/management/regClient";
import withRegClient from "./withRegClient";

class RegPop extends React.Component {
  render() {
    return (
      <div>
        <ContainerPop>
          <div className="name">
            <label className="regInfo" htmlFor="name">
              Company name
              <Input className="inp" />
            </label>
          </div>
          <div className="regnum">
            <label className="regInfo" htmlFor="name">
              Business Number
              <Input placeholder="Business Number " />
            </label>
          </div>
          <div className="regnum">
            <label className="regInfo">
              Mobile Number
              <Input className="inp" placeholder="Mobile Number" />
            </label>
          </div>
          <div className="date">
            <label className="regInfo" htmlFor="name">
              Address
              <Input className="inp" placeholder="Adress" />
            </label>
          </div>
          <div className="info">
            <label className="regInfo" htmlFor="ifno">
              More Info More Info
              <Input className="inp" placeholder="info" />
            </label>
          </div>
        </ContainerPop>
      </div>
    );
  }
}

export default RegPop;
// export default withRegClient(RegPop);
