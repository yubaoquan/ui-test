import React, { Component } from "react";
import Input from '@ybq/ui/dist/input';
import "@ybq/ui/dist/input/index.css";

class ShiyeInputDemo6 extends Component {
  state = {
    value: ''
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <Input onChange={this.onChange} value={this.state.value} showClear />
      </div>
    );
  }
}

export default ShiyeInputDemo6;
