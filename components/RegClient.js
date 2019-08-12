import React from "react";
import { Button, Table, Modal, Icon } from "antd";
import { Container, DataTable, MainContainer } from "./styles/management/regClient";
import ClientTop from "./management/regClient/Top";
import ClientPop from "./management/regClient/PopUp";
import moment from "moment";
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

class Reg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      data: userdata,
      key: 3,
      delete: false,
      type: "detail",
      userKey: 1
    };
  }

  showModal = e => {
    this.setState({
      userKey: e.target.value
    });

    // userKey = e.target.value;
    console.log("tst ", this.state.data[0].key);
    console.log("show modal:", e.target.value);
    if (e.target.value === "enrol") {
      this.setState({
        delete: true,
        type: "enrol"
      });
    } else {
      this.setState({
        delete: false,
        type: "detail"
      });
    }
    this.setState({
      visible: true
    });
  };

  //modal delete function
  handleDelete = e => {
    console.log("user id", this.state.userKey);
    const data = [...this.state.data];
    this.setState({
      data: data.filter(item => item.key != this.state.userKey),

      visible: false
    });
  };

  handleOk = e => {
    console.log("e value", e);
    const { key, data } = this.state;
    const newData = {
      key: key,
      name: `Edrward ${key}`,
      regnum: "123-456-789",
      address: `London Elizabet street, Harvad University Park no. ${key}`,
      mobile: "123-456-789",
      date: full_date,
      view: "View Details"
    };
    console.log("ok button clicked");
    if (this.state.type === "enrol") {
      this.setState({
        key: key + 1,
        data: [...data, newData],
        visible: false
      });
      console.log("save data");
    } else {
      console.log("else case");
      this.setState({
        visible: false
      });
    }
  };

  //modal cancel function
  handleCancel = e => {
    console.log("cancel is clicked");
    this.setState({
      visible: false
      // delete: false
    });
  };

  //data  column display
  columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "id"
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },

    {
      title: "Business  Number",
      key: "regnum",
      dataIndex: "regnum"
    },
    {
      title: "Mobile",
      key: "mobile",
      dataIndex: "mobile"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "Registration date",
      key: "date",
      dataIndex: "date"
    },
    {
      title: "View details",
      key: "view",
      dataIndex: "view",
      render: (view, record) => (
        <span>
          {/* <Button type="ghost" onClick={this.showModal(record.name)}> */}
          <Button type="ghost" value={record.key} onClick={this.showModal}>
            View Details
          </Button>
        </span>
      )
    }
  ];

  render() {
    return (
      <MainContainer>
        <Modal
          maskClosable={false}
          title="Registration Field"
          centered
          onCancel={this.handleCancel}
          visible={this.state.visible}
          footer={[
            <Button type="ghost" onClick={this.handleCancel}>
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
              disabled={this.state.delete}
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
              dataSource={this.state.data}
              className="usr-table"
              columns={this.columns}
              bordered
              pagination={{ position: "bottom" }}
            />
            <Button
              text="done"
              value="enrol"
              type="primary"
              onClick={this.showModal}
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
export default Reg;
