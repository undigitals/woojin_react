import React, { Component } from "react";
import { Button, Table, Modal, Icon } from "antd";
import {Container,DataTable,MainContainer} from "./styles/management/regClient";
import ClientTop from "./management/regClient/Top";
import withRegClient from "./management/regClient/withRegClient";


class Reg extends Component {
  render() {
    return (
      <MainContainer>
        <ClientTop />
        <Container>
          <DataTable>
            <Table
              dataSource={this.props.data}
              className="usr-table"
              columns={this.props.columns}
              bordered
              pagination={{ position: "bottom" }}
            />
            <Button
              className="enrl"
              value="enrol"
              type="primary"
              onClick={this.props.showModal}
            >
              <Icon type="plus" />
              Enrollment
            </Button>
          </DataTable>
        </Container>
      </MainContainer>
    );
  }
}
//higher order component
export default withRegClient(Reg);
