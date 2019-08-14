import React,  {Component} from "react";
import { Button, Table, Modal, Icon } from "antd";
import {
  Container,
  DataTable,
  MainContainer
} from "./styles/management/regClient";
import ClientTop from "./management/regClient/Top";
import ClientPop from "./management/regClient/PopUp";
import moment from "moment";
import withRegClient from "./management/regClient/withRegClient";
import { userdata } from "../mock/tabledata";
//full data format
const full_date = moment().format("DD-MM-YYYY ") + moment().format(" h:m:s");
// fake data generate
const usrdata = [];
for (let i = 0; i < 3; i++) {
  usrdata.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    regnum: "123-456-789",
    address: `London Elizabet street, Harvad University Park no. ${i}`,
    mobile: "123-456-789",
    date: full_date,
    view: "View Details"
  });
}

class Reg extends Component {
  render() {
    return (
      <MainContainer>
        <Modal
          maskClosable={false}
          title="Registration Field"
          centered
          onCancel={this.handleCancel}
          visible={this.props.visible}
          footer={[
            <Button type="ghost" onClick={this.props.handleCancel}>
              <Icon type="close" />
              cancel
            </Button>,
            <Button type="primary" onClick={this.handleOk}>
              <Icon type="save" />
              save
            </Button>,
            <Button
              type="danger"
              // value={}
              disabled={this.props.delete}
              onClick={this.handleDelete}
              // onClick={test.call(this)}
            >
              <Icon type="delete" />
              delete
            </Button>
          ]}
        >
          <ClientPop
          //  pname={this.state.data[this.state.userKey].name}
          />
        </Modal>
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
              text="done"
              value="enrol"
              type="primary"
              onClick={this.props.showModal}
              style={{ margin: "10px" }}
            >
              Enrollment
            </Button>
          </DataTable>
        </Container>
      </MainContainer>
    );
  }
}
export default withRegClient(Reg);
