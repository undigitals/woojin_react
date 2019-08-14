import React from "react";

const Update = Original => {
  class NewComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }

    increament = () => {
      this.setState({
        count: this.state.count + 1
      });
      console.log(this.state.count);
    };
    render() {
      return <Original count={this.state.count} inc={this.increament} />;
    }
  }
  return NewComp;
};

export default Update;
