import React from "react";
import 'antd/dist/antd.css';
import { Wrapper } from "./styles/management/mainBusAlar";
import { Table, Button, Modal, Icon } from "antd";
import { alarm } from "../mock/maintenance";
import PopUp from "./management/mainBusAlarm/PopUp";
import Top from "./management/mainBusAlarm/Top";
import moment from "moment";
const full_date = moment().format("DD-MM-YYYY ") + moment().format(" h:m:s");

class RegBus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      data: alarm,
      delete: false,
      type: "detail",
      userKey: null,
      id: 20
    };
  }
  //show the popup function
  showModal = e => {
    console.log('test ',e.target.value);
    if (e.target.value === "enrol") {
      this.setState({
        delete: true,
        type: "enrol"
      });
    } else {
    this.state.userKey = e.target.value;
      this.setState({
        userKey: e.target.value,
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
    const data = [...this.state.data];
    this.setState({
      data:  data.filter(item => item.id != this.state.userKey),
      visible: false
    });
  };

  
  handleOk = e => {
    console.log("e value", e);
    const { id, data } = this.state;
    const newData = {
      id: id,
      card_number: 'FFFF',
      account_name: 'WJ Transport',
      route_number: '999',
      car_number: '4567',
      bms: `WS00011`,
      view: "View Details"
    };
    console.log("ok button clicked");
    if (this.state.type === "enrol") {
      this.setState({
        id: id + 1,
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
    });
  };

  columns = [
    {
      title: "id",
      key: "id",
      dataIndex: "id"
    },
    {
        title: "Car Number",
        dataIndex: "car_num"
      },
      {
        title: "Alarm position",
        dataIndex: "alarm_position"
      },
      {
        title: "Alarm code",
        dataIndex: "alarm_code"
      },
    {
      title: "Alarm state",
      dataIndex: "alarm_state"
    },
    {
      title: "Alarm time",
      dataIndex: "alarm_time"
    },
    {
        title: "Confirmation",
        dataIndex: "confirm"
      },
    {
      title: "View Details",
      dataIndex: "detail",
      render: (view, record, index) => (
        <span>
          <Button
            style={{ backgroundColor: "#f8ac59", color: "white" }}
            type="default"
            value={record.id}
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
      <div>
        <Top />
        <Wrapper>
          <Modal
            maskClosable={false}
            title="Add/ Modify Electric Bus"
            centered
            onCancel={this.handleCancel}
            visible={this.state.visible}
            footer={[
              <div
                className="pagination"
                style={{ textAlign: "center" + "!important" }}
              >
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
            <PopUp rname={this.data} />
          </Modal>
          <Table
            columns={this.columns}
            dataSource={this.state.data}
            bordered
            title={() => "View Results"}
            // scroll={{y: 300}}
          />

          <Button
            value="enrol"
            type="primary"
            onClick={this.showModal}
            style={{ float: 's', margin: "10px", backgroundColor: '#1ab394', borderColor: '#1ab394', paddingTop: '1', paddingBottom: '1', fontWeight: '700', fontSize: '24' }}
          >
            <Icon type="plus" />
            Enrollment
          </Button>
        </Wrapper>
      </div>
    );
  }
}

export default RegBus;