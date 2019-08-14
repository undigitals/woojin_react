import React from "react";
import { userdata } from "../../../mock/tabledata";
import { Button, Table, Modal, Icon } from "antd";

const Update = Children => {
  class NewComp extends React.Component {
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
            // userKey: e.target.value
            // visable: true
        });
        // alert('wroking')

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
    //   console.log("e value", e);
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
            <Button type="ghost"  onClick={this.showModal(record.key)}>
              View Details
            </Button>
          </span>
        )
      }
    ];

    render() {
      return (
        <Children
          visable={this.state.visible}
          data={this.state.data}
          columns={this.columns}
          handleCancel={this.handleCancel}
          showModal={this.showModal}
        />
      );
    }
  }
  return NewComp;
};

export default Update;
