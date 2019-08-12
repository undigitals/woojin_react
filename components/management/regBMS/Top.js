import React from "react";
import { Select, Input, Button } from "antd";
import { Container } from "../../styles/management/RegBMS";

const { Option } = Select;
class Top extends React.Component {
  render() {
    return (
      <Container>
        <div className="col1">
          <p> Battery name </p>
          <Input className="inp" placeholder="Battery name" />
        </div>
        <div className="col2" >
          <Button type="primary">Check</Button>
        </div>
      </Container>
    );
  }
}
export default Top;
