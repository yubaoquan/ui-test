import React, { Component } from "react";
import Input from '@ybq/ui/dist/input';
import "@ybq/ui/dist/input/index.css";

class ShiyeInputDemo1 extends Component {
  render() {
    return (
      <div>
        <Input addonBefore="$" />
        <Input addonAfter="%" />
        <Input addonBefore="Buy" addonAfter="Apple" />
      </div>
    );
  }
}

export default ShiyeInputDemo1;
