import React, { Component } from "react";
import Input from '@ybq/ui/dist/input';
import "@ybq/ui/dist/input/index.css";

class ShiyeInputDemo1 extends Component {
  render() {
    return (
      <div>
        <Input type="textarea" value={'abc'} placeholder="xxx" />
      </div>
    );
  }
}

export default ShiyeInputDemo1;
