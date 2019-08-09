import React from "react";
import { Button, Table, Modal, Icon } from "antd";
import { Container, DataTable, MainContainer } from "./styles/Client";
import RouteTop from "./management/regRoute/RouteTop";
import RoutePopUp from "./management/regRoute/RoutePopUp";
import moment from "moment";
import { routedata } from "../mock/tabledata";
// import 'antd/dist/antd.css';


const full_date = moment().format("DD-MM-YYYY ") + moment().format(" h:m:s");

// var userKey;
class Reg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      data: routedata,
      key: 3,
      delete: false,
      type: "detail",
      userKey: null,
      singledata: []
    };
  }

  showModal = e => {
    console.log("clicked value ", e);
    const data = [...this.state.data];
    //check button(enrol && view detail)
    if (e.target.value === "enrol") {
      this.setState({
        delete: true,
        type: "enrol"
      });
    } else {
      // this.state.userKey = e.target.value;
      this.setState({
        singledata: data.filter(item => item.key == e.target.value),
        delete: false,
        type: "detail"
      });
    }
    console.log("show modal:", this.state.singledata[0]);
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
      companyname: `woojin transportation ${key}`,
      routename: "700B",
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
      console.log("else case ok button");
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
      title: "Route ID",
      dataIndex: "key",
      key: "id"
    },
    {
      title: "Route name",
      dataIndex: "routename",
      key: "routename"
    },

    {
      title: "Company name",
      key: "companyname",
      dataIndex: "companyname"
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
          <Button
            style={{ backgroundColor: "yellasdfow" }}
            type="dashed"
            value={record.key}
            onClick={this.showModal}
          >
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
          title="Add/Edit Accounts"
          centered
          onCancel={this.handleCancel}
          visible={this.state.visible}
          footer={[
            <div className="pagination" style={{alignItems: 'center' +  '!important'}}>
              <Button type="ghost" onClick={this.handleCancel}>
                <Icon type="close" />
                cancel
              </Button>
              <Button type="primary" onClick={this.handleOk}>
                <Icon type="save" />
                save
              </Button>
              <Button
                type="danger"
                // value={}
                disabled={this.state.delete}
                onClick={this.handleDelete}
              >
                <Icon type="delete" />
                delete
              </Button>
            </div>
          ]}
        >
          <RoutePopUp rname={this.data} />
        </Modal>
        <RouteTop />
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
