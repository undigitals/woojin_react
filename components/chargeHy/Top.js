import React from "react";
import { Container } from "../styles/ChartsMenu";
import { Icon, Row, Col, DatePicker, Button } from "antd";

class Top extends React.Component {
  render() {
    return (
      <Container>
        <Row style={{ paddingTop: "15px" }}>
          <Col span={4} offset={4}>
            <DatePicker />
          </Col>
          <Col span={6} offset={6}>
            <Button type="primary" >
              <Icon type="bar-chart" />
              Lookup
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Top;
